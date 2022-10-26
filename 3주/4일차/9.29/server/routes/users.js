const { Router } = require("express");
const { User } = require("../models");
const router = Router();

// localhost:8080/users/create
router.post('/create', async (req, res, next) => {
    let { email, password, name } = req.body;

    try {
        await User.create({
            email,
            password,
            name
        })
        
        res.json({
            message: "회원 가입이 완료됨",
            status: true
        })

    } catch (err) {
        next(err);
    }
})

// localhost:8080/users/login
router.post('/login', async (req, res, next) => {
    let { email, password } = req.body;

    let checkEmail = await User.findOne({ email });
    if (checkEmail === undefined) {
        res.status(401);
        res.json({
            message: "회원 가입 안되있음 -___-.",
            status: false
        });
        return;
    }
   
    if (checkEmail.password !== password) {
        res.status(401);
        res.json({
            message: "비밀번호가 다름 -___^",
            status: false
        });
        
        return;
    }

    //회원의 정보를 응답, (비번 X)
    res.json({
        status: true,
        email: checkEmail.email,
        name: checkEmail.name
    })
})


module.exports = router;