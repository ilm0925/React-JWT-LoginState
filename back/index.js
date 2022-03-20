const express = require("express");
const bodyParser = require("body-parser"); // 설치한 body-parser를 import
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

const key = "asdffdsafsad";
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded parse
app.use(cors());

app.post("/login", (req, res) => {
  const ID = req.body.ID;
  const PWD = req.body.PWD;
  console.log(ID, PWD);
  if (ID == "user" && PWD == "1234") {
    const token = jwt.sign({ username: ID }, key);
    console.log(`Token 생성  : ${token}`);
    res.send(token);
  } else {
    res.send(null);
  }
});
app.post("/Check_State", (req, res) => {
  const token = req.body.token;

  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      res.send(null);
    } else {
      res.send(`${decoded.username}님 안녕하세요`);
    }
  });
});
app.listen(8080, () => {
  console.log("localhost:8080");
});
