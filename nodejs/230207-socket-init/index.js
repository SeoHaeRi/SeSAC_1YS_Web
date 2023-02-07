const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/practice1', (req, res) => {
  res.sendFile(__dirname + '/practice1.html')
})

// client socket 연결 되면 콜백 함수가 실행된다
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);

  //  1번
  socket.emit('welcome', { msg: 'server' })
  // 4번
  socket.on('response', (str) => {
    console.log(str);
  })


  // 실습1
  socket.on('sendMsg', (msg) => {
    console.log(msg);
    socket.emit('serverMsg', 'reply ' + msg )
  })

  // 브라우저 새로고침 할 때마다 connect-disconnect 반복됨
  socket.on('disconnect', () => {
    console.log('server socket disconnected');
  })
})

http.listen(8000, () => {
  console.log('Server port : ', 8000);
})