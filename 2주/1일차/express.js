const express = require("express");
const app = express();

// cors를 이용하여 모든 브라우저의 접근을 허용할 수 있음.

let list = {
  name: "elice",
  age: 5,
  nationality: "korea",
};

// db
let userData = {
    id: "kane",
    pwd: "10"
}

app.get("/", (req, res) => {
  res.send("안녕안녕안녕!");
});

app.get("/hi", (req, res) => {
  res.send("방가~방가~.");
});

app.get("/get/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.get("/get/list", (req, res) => {
    res.send(list);
})

app.get("/get/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

app.get("/login", (req, res) => {
    console.log(req.query);
    let { id, pwd } = req.query;

    console.log(id, pwd);
    if (id !== userData.id) {
        // alert("id가 틀림!");
        res.send({ message: "login fail!!", error: "id is not correct!" });
        return;
    }
    
    if (pwd !== userData.pwd) {
        // alert("pwd가 틀림!");
        res.send({ message: "login fail!!", error: "pwd is not correct!" });
        return;
    }

    res.send({ message: "login success!!", error: "" });
    
})


app.listen(7777, () => {
  console.log("server open!! port: 7777!!zz");
});
