const Test = require('../model/Test');
const Login = require('../model/login');

exports.main = (req, res) => {
    // let hi = Test.hello();
    // res.send(hi);
    res.render("index");
}

exports.test = (req, res) => {
    res.send("test");
}

// 실습1 - 로그인
exports.login = (req, res) => {
    res.render("login");
}

exports.signin = (req, res) => {
    /*
    let data = Login.loginMethod();

    console.log(req.body);
    if (req.body.id == data.id && req.body.pw == data.pw) {
        res.send({ color: 'blue', msg: '로그인 성공!' })
        // or res.send("<p style='color:blue'>로그인 성공</p>")
        // innerHTML로 res.data 받기
    } else {
        res.send({ color: 'red', msg: '아이디 또는 비밀번호를 잘못 입력했습니다' })
    }
    */
    let users = Login.userInform();
    let user_list = users.split("\n");
    /* user_list = [
        'spreatics//12341234//코딩온',
        'codee//4321//codee',
        'haeri//1234//서해리'
    ] */
    let login_flag = false; // for문 안에서 send하면 send가 여러번 갈 수 있음 (에러)
    let name = '';
    for (var i = 0; i < user_list.length; i++) {
        let user = user_list[i].split("//");
        if (req.body.id == user[0] && req.body.pw == user[1]) {
            login_flag = true;
            name = user[2];
            break;
        }
    }
    if (login_flag) {
        res.send({ color: 'blue', msg: `${name}님 환영합니다!` })
    } else {
        res.send({ color: 'red', msg: '아이디 또는 비밀번호를 잘못 입력했습니다' })
    }
}