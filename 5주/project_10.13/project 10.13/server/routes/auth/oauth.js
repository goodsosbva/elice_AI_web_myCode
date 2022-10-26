const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { User } = require("./../../models");
const jwt = require("jsonwebtoken");
const jwtConfig = require("./../../config/jwtConfig");


router.get("/kakao/server", async (req, res, next) => {


    let REST_API_KEY = '2432ddcdc7112e83d44d821cf91fa033';
    let REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
    let CODE = req.query.kakaoCode;

    await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then(data => {
        getKakaoUserInfo(data.data.access_token)
            .then(userInfo => {
                checkEmailSocial(userInfo.data, res);
            })
    })
})

const getKakaoUserInfo = async (accessToken) => {
    return await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
}

const checkEmailSocial = async (socialInfo, res) => {
    if (socialInfo.kakao_account.email === undefined) {
        res.json({
            error: true,
            message: "존재하지 않는 소셜 이메일",
            status: false
        })
        return;
    }

    const checkEmail = await User.findOne({
        email: socialInfo.kakao_account.email
    });

    if (checkEmail) {
        //소셜로그인을 이미 한 상태
        jwt.sign({
            email: checkEmail.email, // 이메일과 이름을 jwt로 변경해주기 위해 작성
            name: checkEmail.name
        }, jwtConfig.secret, { //jwtConfig.secret는 암호문자열임
            expiresIn: '1d'     // 기간을 줌 (1d => 하루, 1h => 한시간, 1m => 1분)
        }, (error, token) => {
            console.log(token);
            if (error) {
                //토큰을 제대로 발행하지 못하고 오류가 났을경우.
                res.status(401)
                    .json({ status: false, message: "토큰 발행 실패", error: true });
            } else {
                //정상적으로 토큰을 발행 했을경우,
                res.json({
                    status: true,
                    accessToken: token, //토큰 값을 브라우저에게 넘겨주는 부분
                    email: checkEmail.email,
                    name: checkEmail.name,
                    social: true,
                    error: false,
                    message: "소셜 로그인 성공"
                })
            }
        })


    } else {
        //소셜로그인을 하지 않은 상태 => 회원가입을 시켜줌.
        await User.create({
            email: socialInfo.kakao_account.email,
            password: "",
            name: socialInfo.properties.nickname
        });

        const checkEmail = await User.findOne({
            email: socialInfo.kakao_account.email
        });

        if (checkEmail) {
            jwt.sign({
                email: checkEmail.email, // 이메일과 이름을 jwt로 변경해주기 위해 작성
                name: checkEmail.name
            }, jwtConfig.secret, { //jwtConfig.secret는 암호문자열임
                expiresIn: '1d'     // 기간을 줌 (1d => 하루, 1h => 한시간, 1m => 1분)
            }, (error, token) => {
                if (error) {
                    //토큰을 제대로 발행하지 못하고 오류가 났을경우.
                    res.status(401)
                        .json({ status: false, message: "토큰 발행 실패", error: true });
                } else {
                    //정상적으로 토큰을 발행 했을경우,
                    res.json({
                        status: true,
                        accessToken: token, //토큰 값을 브라우저에게 넘겨주는 부분
                        email: checkEmail.email,
                        name: checkEmail.name,
                        social: true,
                        error: false,
                        message: "소셜 로그인 성공"
                    })
                }
            });
            return;
        }
        res.status(500).json({
            error: true,
            message: "정상적이지 않은 접근입니다."
        });
    }
}


module.exports = router;