/*
const fs = require("fs");
// 콜백 형식
fs.readFile("./test.txt", function (err, data) {
    // nodejs 에서는 이렇게 처리하면 서버 죽음
    // if (err) throw err;
    if (err) console.log(err);
    console.log("data : ", data.toString()); //String(data)
})
fs.writeFile('./write2.txt', 'codingon', function (err) {
    if (err) console.log(err);
    fs.readFile("./write2.txt", function (err, data) {
        if (err) console.log(err);
        console.log("write2File data : ", data.toString());
    })
})

// 프로미스 형식
const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data) => {
        console.log("promise - data : ", data);
    });

fs2.writeFile("./write.txt", 'sesac')
    .then(function () {
        return fs2.readFile('./write.txt')
    })
    .then(function (data) {
        console.log(data.toString());
    })
*/

// ---------실습--------------
const fs3 = require("fs").promises;
fs3.writeFile("./sesac.txt", "반갑습니다")
    .then(function () {
        return fs3.readFile('./sesac.txt')
    })
    .then((data) => {
        console.log("sesac.txt : " + data.toString());
    })
    .then(function () {
        return fs3.copyFile('./sesac.txt', './sesac2.txt')
    })
    .then(function () {
        return fs3.readFile('./sesac2.txt');
    })
    .then(function () {
        return fs3.rename('./sesac2.txt', './new.txt');
    })
    .then(function () {
        return fs3.readFile('./new.txt')
    })
    .then(function (data) {
        console.log("new.txt : " + data.toString())
    })