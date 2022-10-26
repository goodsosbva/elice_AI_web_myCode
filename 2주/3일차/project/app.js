const express = require("express");
const app = express();
const PORT = 7777;

const noteRouter = require("./routes/notes");

// json 형태로 가져와야 읽을 수 있음
app.use(express.json());

// 경로 설정
app.use("/notes", noteRouter);

app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});


app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`server port ${PORT} is open!`)
})