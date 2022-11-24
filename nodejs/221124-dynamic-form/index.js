const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs")
/* form 사용 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* axios */
// ejs 할 때는 get으로만 render
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/formAxios", (req, res) => {
    console.log(req.query);
    res.send({ msg: "get - 이름은 : " + req.query.name });
})
app.post("/formAxios", (req, res) => {
    console.log(req.body);
    res.send({ msg: "post - 이름은 : " + req.body.name });
})

/* 실습 - get */
app.get("/practice1", (req, res) => {
    res.render("axios-get")
})
app.get("/signUp", (req, res) => {
    console.log(req.query);
    res.send("회원가입 성공")
})

/* 실습 - post */
app.get("/practice2", (req, res) => {
    res.render("axios-post");
})
app.post("/signIn", (req, res) => {
    console.log(req.body);
    if (req.body.id == 'good' && req.body.pw == 'good') {
        res.send({ color: 'blue', msg: '로그인 성공!' })
        // or res.send("<p style='color:blue'>로그인 성공</p>")
        // innerHTML로 res.data 받기
    } else {
        res.send({ color: 'red', msg: '아이디 또는 비밀번호를 잘못 입력했습니다' })
    }

})

/* 실습 - ajax */
app.get("/practice3", (req, res) => {
    res.render("ajax")
})
app.get("/ajax", (req, res) => {
    console.log(req.query);
    res.send(req.query);
})
app.post("/ajax", (req, res) => {
    console.log(req.body);
    if (req.body.id == 'good' && req.body.pw == 'good') {
        res.send({ color: 'blue', msg: '로그인 성공!' })
    } else {
        res.send({ color: 'red', msg: '아이디 또는 비밀번호를 잘못 입력했습니다' })
        // 에러 났을 때 : res.status(400).send()
    }
})

/* 실습 - fetch */
app.get("/practice4", (req, res) => {
    res.render("fetch")
})
app.get("/fetch", (req, res) => {
    var data = {
        name: req.query.name,
        gender: req.query.gender,
        year: req.query.year,
        month: req.query.month,
        day: req.query.day
    }
    console.log(data);
    res.send(data);
})
app.post("/fetch", (req, res) => {
    console.log(req.body);
    if (req.body.id == 'good' && req.body.pw == 'good') {
        var data = {
            color: 'blue',
            msg: '로그인 성공!'
        }
        res.send(data)
    } else {
        var data = {
            color: 'red',
            msg: '아이디 또는 비밀번호를 잘못 입력했습니다'
        }
        res.send(data)
    }
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})