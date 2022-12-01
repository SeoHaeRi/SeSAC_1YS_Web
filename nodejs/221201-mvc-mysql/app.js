const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 폴더까지 써주면 그 안에 index.js 를 찾아감, router에는 exports한 것이 담긴다
const router = require('./routes');
app.use('/visitor', router);

app.get('*', (req, res) => {
    res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
})

app.listen(port, () => {
    console.log('server open : ', port);
})