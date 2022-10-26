const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user/user");
const dailyRouter = require("./routes/daily/daily");
const ouathRouter = require("./routes/auth/oauth");
const authMiddleware = require('./utils/authMiddleware');

const app = express();

const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/daily');

mongoose.connection.on('connected', () => {
    console.log('mongodb Connect Success');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 카카오 소셜 로그인용 라우터 경로 설정
app.use("/oauth", ouathRouter);
app.use("/user", userRouter);
app.use("/daily", authMiddleware, dailyRouter);


app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});