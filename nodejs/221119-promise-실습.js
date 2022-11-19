/*
new Promise(function (resolve, reject) {
    // resolve : 함수 형태, 성공했을 때 실행할 친구
    // reject : 함수 형태, 실패 or 에러를 처리할 때 사용되는 친구
});
*/

/* callback hell 형태
function login(id, pw, cb) {
    setTimeout(function () {
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb) {
    setTimeout(function () {
        console.log(id + "의 비디오 리스트");
        cb(['아바타', '라라랜드']);
    }, 2000);
}
function getDetail(video, cb) {
    setTimeout(function () {
        cb("비디오 제목 : " + video);
    }, 1000);
}

login('kim', '1234', function (user) {
    getVideo(user, function (videos) {
        getDetail(videos[0], function (msg) {
            console.log("msg :", msg);
        });
    });
});
*/

function login(id, pw) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("사용자 입장");
            resolve(id);
        }, 3000)
    })
}
function getVideo(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(id + "의 비디오 리스트");
            resolve(['아바타', '라라랜드']);
        }, 2000)
    })
}
function getDetail(video) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("비디오 제목: " + video);
        }, 1000)
    })

}

login('kim', '1234')
    .then(function (user) {
        console.log("user : ", user);
        return getVideo(user);
    })
    .then(function (videos) {
        console.log("videos : ", videos);
        return getDetail(videos[0]);
    })
    .then(function (msg) {
        console.log("msg :", msg);
    })