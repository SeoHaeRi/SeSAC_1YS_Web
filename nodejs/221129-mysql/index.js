const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
const cnn = mysql.createConnection({
    // 옵션 객체
    host: 'localhost',
    user: 'user',
    password: '000000',
    database: 'test'
})

app.get('/', (req, res) => {
    cnn.query('select * from user', (err, result) => {
        if (err) throw err;

        console.log(result);
        res.render('index', { rows: result });
    })

})

app.listen(port, () => {
    console.log("server port : ", port);
})