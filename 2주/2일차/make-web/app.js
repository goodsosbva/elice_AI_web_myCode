// express libaray fetch
const express = require("express");
// 함수 담기
const app = express();
const PORT = 7777;
// http://localhost:7777/user/ => 이 경로를 통해 userRouter에 접근
const userRouter = require('./routes/user');

// body에 들어오는걸 json 인코딩
app.use(express.json());
// body에 문자열로 url이 들어오는걸 인코딩
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + "/views")

// npm i ejs
// 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

app.use("/user", userRouter) // /user 경로로 가면 userRouter를 이용해! 라는 뜻.

// __dirname 현재 경로를 의미한다.
app.get('/', (req, res) => {
    res.render("index.html");
})


app.listen(PORT, () => {
    console.log("server open: " + PORT);
})
