const { Router } = require("express");
const crypto = require("crypto");
const { User } = require("../../models");
const router = Router();
// jwt 토큰 사용
const jwt = require("jsonwebtoken");
const jwtConfig = require("./../../config/jwtConfig");

// http://lcoalhost7777/user/signUp
// 회원 가입
router.post("/signUp", async (req, res, next) => {
    let { email, password, name } = req.body;

    let chkEmail = await User.findOne({ email });

    if (chkEmail) {
        // res.status(500);
        res.json({
            Status: false,
            message: "이미 가입된 이메일!"
        })
        return;
    }

    let hashPassword = await passwrodHash(password);

    await User.create({
        email,
        password: hashPassword,
        name
    })

    res.json({
        status: true,
        message: "회원 가입이 완"
    })
})


router.post('/login', async (req, res, next) => {
    // 이메일을 비교해서 존재하는 확인
    // 비밀번호가 맞는지 확인

    let { email, password } = req.body;
    console.log(email);

    let chkEmail = await User.findOne({ email });
    if (!chkEmail) {
        // res.status(500);
        res.json({
            Status: false,
            message: "없는 이메일!"
        })
        return;
    }
    let hasedPwd = passwrodHash(password);
    if (hasedPwd !== chkEmail.password) {
        res.json({
            Status: false,
            message: "비번이 틀립니다!"
        })
        return;
    }

    // jwt 사용 _ base64 기반 => 인코딩, 디코딩 가능 ( 암호문 평문화 가능 )
    jwt.sign({
        email: chkEmail.email,
        name: chkEmail.name
    }, jwtConfig.secret, {
        expiresIn: '1d'
    }, (err, token) => {
        if (err) {
            res.status(401).json({ status: false, message: "토큰 발행 실패!" });
        } else {
            res.json({
                status: true,
                accessToken: token,
                email: chkEmail.email,
                name: chkEmail.name
            })
        }
    })
});

// 비밀번호를 해쉬로 변경해서 데이터베이스에 저장
const passwrodHash = (pwd) => {
    return crypto.createHash("sha1").update(pwd).digest("hex");
}

module.exports = router;

