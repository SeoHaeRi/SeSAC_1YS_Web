const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 폴더까지 써주면 그 안에 index.js 를 찾아감, router에는 exports한 것이 담긴다
const router = require('./routes');
app.use('/', router);

app.get('*', (req, res) => {
    res.send('error');
})

app.listen(port, () => {
    console.log('server open : ', port);
})