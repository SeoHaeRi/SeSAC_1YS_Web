const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
/* form 사용! */
app.use(express.urlencoded({ extended: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json: 딕셔너리 형태와 비슷

app.use(session({
    secret: '1234', // 임의의 문자열로 세션을 암호화함.
    resave: false, // true: 모든 요청마다 session에 변화가 없어도 session을 다시 저장함
    saveUninitialized: true    // 초기화되지 않은 세션을 저장하냐 마냐
    // cookie: {}
    // secure:
}))
app.get("/", (req, res) => {
    console.log(req.session)
    if (req.session.user) res.render("main", { isLogin: true, id: req.session.user })
    else res.render("login", { isLogin: false, id: "" })
    // res.send("세션 수업");
})
app.get("/setSession", (req, res) => {
    req.session.user = "id";
    res.send("세션 생성 성공")
})

const user = { id: "a", pw: "1" };

app.post("/login", (req, res) => {
    if (req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send(true)
    } else {
        res.send(false)
    }
})

app.delete("/logout", (req, res) => {
    console.log(req.session)
    req.session.destroy((err) => {
        if (err) throw err;
        console.log(req.session)
        res.send("로그아웃 성공");
    })
})

app.listen(port, () => {
    console.log("server open : ", port);
})