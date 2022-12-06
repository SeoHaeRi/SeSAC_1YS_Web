const { User } = require("../model");

exports.view_signup = (req, res) => {
    res.render('signup');
}

exports.signup = async (req, res) => {
    let data = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name
    }
    let result = await User.create(data);
    res.send(result);


    // req.body 데이터 mysql 등록
    // res.send 회원가입 성공 메시지
    // var sql = `INSERT into user (id, pw, name) values ('${info.id}', '${info.pw}', '${info.name}');`;
    // User.signup_user(req.body, function () {
    //     res.send(true);
    // })
}

exports.view_signin = (req, res) => {
    res.render('signin')
}

exports.signin = async (req, res) => {
    let data = {
        id: req.body.id,
        pw: req.body.pw
    }
    let result = await User.findOne({ where: { id: data.id, pw: data.pw } });
    console.log(result);
    res.send(result);
    // 성공 시 result = {값} 객체, 실패시 null


    // req.body 데이터 mysql 조회 > 로그인
    // res.send 로그인 성공
    // sql = `SELECT * from user where id = '${id}' and pw='${pw}';`;
    // User.signin_user(req.body.id, req.body.pw, function (result) {
    //     // axios 요청에서는 render 하면 안됨, send 해줘야 함
    //     res.send(result);
    // })
}

// form action 으로 실행됨
exports.profile = async (req, res) => {
    let result = await User.findOne({ where: { id: req.body.id } });
    res.render("profile", { data: result });
    // result : {값}

    // var sql = `SELECT * from user where id = '${id}';`;
    // req.body 데이터 mysql 조회 > 로그인
    // 프로필 페이지 이동
    // User.get_user(req.body.id, function (result) {
    //     res.render("profile", { data: result });
    // })
}

exports.edit_user = async (req, res) => {
    let data = {
        pw: req.body.pw,
        name: req.body.name
    };
    let result = await User.update(data, { where: { id: req.body.id } });
    console.log(result);
    res.send(result);
    // result: 변화X, 성공O [ 0 ], 변화O, 성공O [ 1 ]

    // var sql = `UPDATE user set pw='${info.pw}', name = '${info.name}' where id='${info.id}';`;
    // req.body 데이터 mysql update
    // User.edit_user_by_id(req.body, function () {
    //     res.send(true);
    // })
}

exports.delete_user = async (req, res) => {
    let result = await User.destroy({ where: { id: req.body.id } });
    console.log(result);
    res.send(String(result));
    // result : 1, 0 (숫자)

    // var sql = `DELETE from user where id='${id}';`;
    // req.body 데이터 mysql delete
    // User.delete_user_by_id(req.body.id, function () {
    //     res.send(true);
    // })
}