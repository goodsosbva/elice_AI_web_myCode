const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// 라우팅 파일
const postRouter = require("./routes/post");
const userRouter = require("./routes/users");

const app = express();

// database connect
mongoose.connect('mongodb://localhost:27017/myapp2');

mongoose.connection.once("open", () => {
    console.log("db connect succes!!!")
})

mongoose.connection.on("error", (err) => {
    console.log(err)    
})

// 클라이언트와 서버의 주소가 서로 다드
app.use(cors());
//들어오는 요청을 body를 json으로 파싱
app.use(express.json());
// post요청에 url에디 을ㄹ어
app.use(bodyParser.urlencoded({ extended: true }));

// 경로 설정 라우팅
app.use('/posts', postRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
    res.status(404);
    res.json({
        message: 'Not Found!',
        status: false
    })
})

// 오류처리 미들웨어
app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        message: err.message,
        status: false
    })
})

// express 서버 실행
app.listen(7777, () => {
    console.log("server open port => 7777");
})