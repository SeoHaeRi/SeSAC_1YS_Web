/*
function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}

let a = call('kim');
console.log("시작은 " + a);
let b = back();
console.log("두번째는 " + b);
let c = hell();
console.log("세번째는 " + c);
*/

function call(name, cb) {
    setTimeout(function () {
        console.log("사용자는 " + name);
        cb('call');
    }, 2000)
};

function back(a, cb) {
    setTimeout(function () {
        console.log("시작은 " + a);
        cb('back');
    }, 1000);
};

function hell(b, cb) {
    setTimeout(function () {
        console.log("두번째는 " + b);
        cb('hell');
    }, 500);
};

call('kim', function (call) {
    back(call, function (back) {
        hell(back, function (hell) {
            console.log("세번째는 " + hell);
        })
    })
})