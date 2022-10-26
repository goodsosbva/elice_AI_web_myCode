const express = require("express");
const router = express.Router();

// 회원 가입된 사람
let userData = [{
    id: 'kane',
    pwd: '10',
}];

// http get
// http://localhost:7777/user/login => 로그인 페이지를 보여주고,
router.get("/login", (req, res, next) => {
    res.render("login.html");
});


// http://localhost:7777/user/signUp => 로그인 등록 페이지를 보여주고,
router.get("/signUp", (req, res, next) => {
    res.render("signUp.html");
});

// http post
// http://localhost:7777/user/login 
router.post("/login", (req, res, next) => {
    // req => id, pwd를 가져온 다음 비교할듯
    let { id, pwd } = req.body;
    // console.log(id, pwd);
    // console.log(userData);
    // for -> userData에 id랑 pwd가 있는지 체크
    for (let i = 0; i < userData.length; i++) {
        if (id === userData[i].id && pwd === userData[i].pwd) {
            res.send({ message: "로그인 성공!", error: "" });
        } else if (id !== userData[i].id) {
            res.send({ message: "아디가 틀려~", error: "아디가 틀려~." });
        } else {
            res.send({ message: "비번이 틀려~", error: "비번이 틀려~." });
        }
        
    }
})


router.post("/signUp", (req, res, next) => {
    // let { id, pwd, name } = req.body; or req.query or req.params
    // 값이 들어오면 null값 체크,
    console.log(req.body);
    // req => id, pwd를 가져온 다음 비교할듯
    let { id, pwd, rePwd, name } = req.body;
    console.log(id, pwd, rePwd, name);
    // if === null
    if (id === "") {
        //id가 틀린 부분        
        res.send({ message: "아이디 없어~", error: "아이디가 없어~." });
        return;
    }

    if (pwd === "") {
        //pwd 틀린 부분
        res.send({ message: "비번이 없어~", error: "비번이 없어~." });
        return;
    }

    if (rePwd === "") {
        //rePwd 틀린 부분
        res.send({ message: "확인 비번이 없어~", error: "확인 비번이 없어~." });
        return;
    }

    if (pwd !== rePwd) {
        //pwd !== rePwd 틀린 부분
        res.send({ message: "1차랑 2차 비번이 틀려~", error: "1차랑 2차 비번이 틀려~" });
        return;
    }

    if (name === "") {
        //name 틀린 부분
        res.send({ message: "name이 없어~", error: "name이 없어~." });
        return;
    }

    // 통과한 다면?
    res.send({ message: "회원가입 성공!", error: "" });
    // userData에 배열 객체를 추가 => {id, pwd, name}
    userData.push({
        id: id,
        pwd: pwd,
        rePwd: rePwd,
        name: name,
    })

    console.log(userData);
})

module.exports = router;