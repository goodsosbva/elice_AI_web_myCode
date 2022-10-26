const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const userRouter = require("./routes/user/user");

const app = express();

mongoose.connect("mongodb://localhost:27017/daily");

mongoose.connection.on('connected', () => {
    console.log('mdb connected!');
})

mongoose.connection.on('error', () => {
    console.log('mdb error!');
})

app.use(cors());
// exprss로 받아온 데이터를 json으로 보내주는 것
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

const PORT = 7777;
app.listen(PORT, () => console.log(`server open => ${PORT}`));