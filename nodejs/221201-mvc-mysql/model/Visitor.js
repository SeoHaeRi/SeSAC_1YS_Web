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
    // cnn.query() 함수가 실행이 오래 걸림, 결과가 나올 때 까지 기다려주지 않아서 콜백 함수 사용
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("visitors : ", rows);

        cb(rows);
    })
}

// 등록
exports.register_visitor = (info, cb) => {
    // info = req.body
    var sql = `INSERT into visitor (name, comment) values ('${info.name}', '${info.comment}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("insert result : ", result);

        cb(result.insertId);
    })
}

// 삭제
exports.delete_visitor = (id, cb) => {
    var sql = `DELETE from visitor where id = ${id};`

    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("delete result : ", result);
        cb();
    })
}

// 수정
exports.get_visitor_by_id_model = (id, cb) => {
    var sql = `SELECT * from visitor where id = ${id};`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("select by id : ", rows);
        cb(rows[0]);
    })
}

exports.update_visitor = (info, cb) => {
    var sql = `UPDATE visitor set name='${info.name}', comment='${info.comment}' where id=${info.id};`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("update : ", result);
        cb();
    })
}