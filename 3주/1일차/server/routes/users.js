const { Router } = require("express");
const router = Router();
const { User } = require('../models');


// http://localhost:7777/users/signUp
router.post('/signUp', async (req, res, next) => {
    // 이미 존재하는 회원인지 확인
    // 존재하지 않는다면 회원가입

    // 회원의 비밀번호를 인코딩함.
    // -> react때 할거임.
    const { email, password, name } = req.body;
    
    // 이미 존재하는 회원인지 체크하기 위한 코드
    let checkEmail = await User.findOne({ email });
    // console.log(checkEmail);
    if (checkEmail === null) {
        try {
            await User.create({
                email,
                password,
                name
            });
            res.json({
                message: "회원 가입 성공!",
                status: true
            });
        } catch (e) {
            next(e);
        }
    } else {
        res.status(500);
        res.json({
            message: "이미 존재하는 이메일입니다.",
            status: false
        })
    }
    
})

router.post("/login", async (req, res, next) => {
    // console.log(req.body);
    // 회원이 있는 사람인지 먼저 확인
    // 회원이 있다면 그사람의 정보를 DB로 가져와서 패스워드가 일치하는지 확인
    // 그 사람의 정보를 응답

    let { email, password } = req.body;

    let chkEmail = await User.findOne({ email });
    // console.log(chkEmail.email);
    if (!chkEmail) {
        // 로그인 관련 문제 -> 401
        // 관리자 관련 문제 -> 403
        res.status(401);
        res.json({
            message: "존재하지 않는 회원입니다.",
            status: false
        })
        return;
    }

    if (chkEmail.password !== password) {
        res.status(401);
        res.json({
            message: "비밀번호가 틀림~",
            status: false
        })
        return;
    }

    // jwt라는 토큰을 발행.
    res.json({
        status: true,
        email: email,
        name: chkEmail.name
    })
})


module.exports = router;