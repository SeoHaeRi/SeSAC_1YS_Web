const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use("/static", express.static("static"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// {소켓아이디: 닉네임, 소켓아이디: 닉네임}
let list = {}

// client socket 연결 되면 콜백 함수가 실행된다
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
io.on('connection', (socket) => {
  console.log('Server Socket Connected');
  socket.emit('info', socket.id);
  // io.emit('notice', socket.id + '님이 입장하셨습니다')

  socket.on('username', (name) => {
    list[socket.id] = name;
    io.emit('list', list);
    io.emit('notice', name + '님이 입장하셨습니다')
  })

  socket.on('send', (json) => {
    json['from'] = socket.id;
    json['username'] = list[socket.id];
    json['is_dm'] = false;

    if(json.to === '전체') io.emit('newMsg', json)
    else {
      json['is_dm'] = true;
      const socketID = Object.keys(list).find(key => list[key] == json.to);
      io.to(socketID).emit('newMsg', json);
      socket.emit('newMsg', json);
    }
  })

  socket.on('disconnect', () => {
    io.emit('notice', list[socket.id] + '님이 퇴장하셨습니다');
    delete list[socket.id];
    io.emit('list', list);
  })
})

http.listen(8000, () => {
  console.log('Server port : ', 8000);
})