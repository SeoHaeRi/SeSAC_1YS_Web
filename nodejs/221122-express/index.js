const express = require('express');
// 1. express로 객체 만들기 (사용하려는 모듈은 app이용해서 사용)
const app = express();
const port = 8080;

// app.use("/경로", express.static("폴더,파일 이름"));
// static 이라는 실제 존재하는 폴더에 public(아무 글자 가능) 경로로 접근할 수 있도록 함
// src="/public/img/cat.jpg"
// public 자리에 실제 폴더명 작성하는게 코드 알아보기 편함
app.use("/public", express.static("static"));

/* form 사용! */
app.use(express.urlencoded({ extended: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json: 딕셔너리 형태와 비슷

// 3. 이 주소에 들어갔을 때 보여지는 것 : get(route-도메인 뺀 주소, 함수)
app.get('/', (req, res) => {
    // res.send('Hello Express!');
    // sendFile은 절대경로로 입력
    // __dirname은 이 파일이 있는 상위 폴더까지 절대 경로 의미
    res.sendFile(__dirname + "/views/index.html");
})
app.get('/test', (req, res) => {
    res.send("hello test!")
})

/* ejs template */
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

// 위에 view engine 해놔서 확장자는 안 써도 됨
app.get('/ejs', (req, res) => {
    res.render("index", {
        title: "index 페이지 입니다.",
        data: ['a', 'b', 'c']
    })
})

app.get('/img', (req, res) => {
    res.render("img", {
        src: ["<img src='/public/img/img_1.jpg'>", "<img src='/public/img/img_2.jpg'>", "<img src='/public/img/img_3.jpg'>"],
        src2: ["/public/img/img_1.jpg", "/public/img/img_1.jpg", "/public/img/img_1.jpg"]
    });
})

/* form 전송 */
app.get("/form", (req, res) => {
    res.render("form");
})
app.get("/getForm", (req, res) => {
    console.log(req.query);
    res.send("get 요청 성공!")
})
app.post("/postForm", (req, res) => {
    console.log(req.body);
    res.render("result", { data: req.body })
})

// 실습
app.get("/practice", (req, res) => {
    res.render("practice")
})
app.get("/getPractice", (req, res) => {
    console.log(req.query);
    res.send("get 요청 성공!")
})
app.post("/postPractice", (req, res) => {
    console.log(req.body);
    res.send("post 요청 성공!")
})

/* form validation 실습 */
app.get("/formValidation", (req, res) => {
    res.render("form validation")
})
app.post("/postValidation", (req, res) => {
    console.log(req.body);
    res.send("정규식 사용 요청 성공!")
})

// 2. 웹 서버 열기 - 마지막줄에 적기 (localhost:8080)
app.listen(port, () => {
    console.log('Server open : ', port);
})