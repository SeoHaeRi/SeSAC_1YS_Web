const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '000000',
    database: 'test2'
})

exports.signup_user = (info, cb) => {
    var sql = `INSERT into user (id, pw, name) values ('${info.id}', '${info.pw}', '${info.name}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("signup result : ", result);
        cb();
    })
}

exports.login_user = (id, pw, cb) => {
    var sql = `SELECT * from user where id = '${id}' and pw='${pw}';`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        let flag = false;
        if (rows.length >= 1) flag = true;
        console.log("select by id : ", rows[0]);
        cb(flag);
    })
}

exports.get_user = (id, cb) => {
    var sql = `SELECT * from user where id = '${id}';`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("select by id : ", rows[0]);
        cb(rows[0]);
    })
}

exports.edit_user_by_id = (info, cb) => {
    var sql = `UPDATE user set pw='${info.pw}', name = '${info.name}' where id='${info.id}';`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("update : ", result);
        cb();
    })
}

exports.delete_user_by_id = (id, cb) => {
    var sql = `DELETE from user where id='${id}';`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("delete : ", result);
        cb();
    })
}