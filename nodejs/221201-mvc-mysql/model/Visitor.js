const mysql = require('mysql');

const cnn = mysql.createConnection({
    // 옵션 객체
    host: 'localhost',
    user: 'user',
    password: '000000',
    database: 'test'
})

// 콜백 함수
exports.get_visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("visitors : ", rows);

        cb(rows);
    })
}

exports.register_visitor = (info, cb) => {
    var sql = `INSERT into visitor (name, comment) values ('${info.name}', '${info.comment}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("insert result : ", result);

        cb(result.insertId);
    })
}