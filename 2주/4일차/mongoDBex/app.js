// 외부 모듈은 이름을 통해 가져올 수 있슴.
const express = require("express"); // 서버 실행 1번
const mongoose = require("mongoose"); // db 실행 1번

// 직접 만든 파일은 경로를 통해 가져온다.
// js파일 제외 모두 확장자명이 붙습니다.
const postRouter = require("./routes/posts");

const app = express(); // express 함수를 변수에 넣는 것. (항상 사용 기억 꼭! ^^) 서버 실행 2번

const createPost = require("./service/create");

const URL = 'mongodb://localhost:27017/myapp';  // db 실행 2번 (mongodb url을 가져온 것)

mongoose.connect(URL); // 몽고디비와 연결하는 부분 (몽구스를 통해서) - db 실행 3번

// 이거 꼭있어야함!
app.use(express.json());  // post 요청을 했을때 들어오는 body값을 읽을 수 가 없음 => 그래서 사용하는 것.

// http://localhost:7777/posts/
app.use("/posts", postRouter);

// db의 연결 상태를 확인 - 실패시
const dbConnectionStates = mongoose.connection;
dbConnectionStates.on('error', (err) => {
    console.log(err);
});

// db의 연결 상태를 확인 - 성공시
dbConnectionStates.once('open', () => {
    console.log("db connection success!!")
})

app.listen(7777, () => { // 서버 실행 3번
    console.log(`sever open -> port: 7777!!`);
    // createPost.create();
})