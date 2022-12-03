const User = require("../model/User");

exports.view_signup = (req, res) => {
    res.render('signup');
}

exports.signup = (req, res) => {
    // req.body 데이터 mysql 등록
    // res.send 회원가입 성공 메시지
    User.signup_user(req.body, function () {
        console.log(result);
        res.send(true);
    })
}

exports.view_login = (req, res) => {
    res.render('login')
}

exports.login = (req, res) => {
    // req.body 데이터 mysql 조회 > 로그인
    // res.send 로그인 성공
    User.login_user(req.body.id, req.body.pw, function (result) {
        // axios 요청에서는 render 하면 안됨, send 해줘야 함
        res.send(result);
    })
}

exports.profile = (req, res) => {
    // req.body 데이터 mysql 조회 > 로그인
    // 프로필 페이지 이동
    User.get_user(req.body.id, function (result) {
        res.render("profile", { data: result });
    })
}

exports.edit_user = (req, res) => {
    // req.body 데이터 mysql update
    User.edit_user_by_id(req.body, function () {
        res.send(true);
    })
}

exports.delete_user = (req, res) => {
    // req.body 데이터 mysql delete
    User.delete_user_by_id(req.body.id, function () {
        res.send(true);
    })
}