// const http = require('http');
// const fs = require('fs').promises;
// const server = http.createServer(function (req, res) {
//     // res.write("<h1>Hello</h1>");
//     // res.end("<hr>")
//     fs.readFile('./https-test.html')
//         .then(function (data) {
//             res.end(data)
//         })
// });
// /*
// server.on() // 이벤트를 등록
// server.listen() //서버를 실행하고 클라이언트를 기다린다.
// */

// server.listen(8080, function () {
//     console.log('8080번 포트로 실행');
// })

// ----------서버에 올리기 실습------------
const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function (req, res) {
    fs.readFile('./https-실습.html')
        .then(function (data) {
            res.end(data)
        })
});
/*
server.on() // 이벤트를 등록
server.listen() //서버를 실행하고 클라이언트를 기다린다.
*/

server.listen(8080, function () {
    console.log('8080번 포트로 실행');
})