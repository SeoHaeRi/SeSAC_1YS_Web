exports.loginMethod = () => {
    return ({ id: 'good', pw: 'good' })
}

// 데이터 형식 : id//pw//이름
// \n 기준으로 문자열 자르기
var users = `spreatics//12341234//코딩온
codee//4321//codee
haeri//1234//서해리`

exports.userInform = () => {
    return users;
}