const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// 미들웨어
app.use(cookieParser());
app.set('view engine', 'ejs');

/* form 사용! */
app.use(express.urlencoded({ extended: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json: 딕셔너리 형태와 비슷

app.get("/", (req, res) => {
    // req.cookies.popup 값을 비교해서 1이 아니면, display, 1이면 none
    if (req.cookies.popup == "1") res.render("index", { popup: "none" })
    else res.render("index", { popup: "block" })
})
app.post("/setpopup", (req, res) => {
    // 1. 쿠키를 만든다, 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 {popup : 1}
    // 2. 서버 응답
    console.log(req.body);
    if (req.body.value) {
        res.cookie("popup", "1", option)
        res.send(true)
    } else {
        res.send(false)
    }
})

const option = {
    httpOnly: true, // 클라이언트가 document.cookie 접근할 수 없게 함.
    maxAge: 60 * 60 * 24 * 1000,  // 만들어진 순간부터 초만큼 뒤에 만료가 됨 (ms 단위), 하루   
    // expires: "2022-12-08T23:00:00",   // GMT 시간 2022-12-08T23:00:00
    // path: "/visitor",   // localhost:8000 쿠키가 없음. localhost:8000/visitor/~~ 쿠키O
    // secure: false,   // true : https 보안서버, 기본값 false
    // signed: true    // 쿠키의 암호화 기본값 false
}
app.get("/set", (req, res) => {
    // res.cookie("key", "value", 옵션객체)
    res.cookie("test", "1", option);
    res.send("쿠키 생성 성공");
})
app.get("/get", (req, res) => {
    console.log(req.cookies);   //  { test: '1' }
    res.send(req.cookies);  //  {"test":"1"}
})

app.listen(port, () => {
    console.log("server open : ", port);
})