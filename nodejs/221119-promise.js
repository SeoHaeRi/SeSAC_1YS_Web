/*
new Promise(function (resolve, reject) {
    // resolve : 함수 형태, 성공했을 때 실행할 친구
    // reject : 함수 형태, 실패 or 에러를 처리할 때 사용되는 친구
});
*/

/*
function func1() {
    return new Promise(function (resolve, reject) {
        resolve("성공");
    })
}
function func2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve("성공") }, 1000);
    })
}

// var a = func1();
// console.log(a);
func1().then(function (result) {
    console.log("result1: ", result);
})
// var b = func2();
// console.log(b);
func2().then(function (result) {
    console.log("result2: ", result);
    return 'a';
}).then(function (abc) {
    console.log("abc: ", abc);
})
*/

function func3(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve("flag는 true");
        } else {
            reject("flag는 false");
        }
    })
}

func3(false).then(
    function (msg) {
        console.log("msg1 : ", msg);
    },
    function (msg) {
        console.log("msg2 : ", msg);
    }
)

func3(false).then(
    function (msg) {
        console.log("msg1 : ", msg);
    }
).catch(
    // then에서 위에 함수처럼 실행하면 catch는 실행 안됨
    function (msg) {
        console.log("msg2 : ", msg);
    }
)