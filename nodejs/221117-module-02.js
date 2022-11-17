/* const result = require('./221117-module-01');

console.log(result.a);
console.log(result.b);
result.test(); // test 함수가 console.log 실행함
*/

const num = require('./221117-module-01');
const a = num.a;
const b = num.b;

function add() {
    return a + b;
}

module.exports = add();