console.log("__filename : " + __filename);
console.log("__dirname : " + __dirname);
console.log("------------------------------");
/**
 * process 객체 = 현재 실행중인 노드 프로세스 정보
 */
console.log("process.version : ", process.version);
console.log("process.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpuUsage : ", process.cpuUsage());
console.log("------------------------------");

/**
 * os 모듈 - 운영체제
 */

const os = require("os");
console.log("os.type : ", os.cpus());
console.log("os.homedir : ", os.homedir());
console.log("os.freemem : ", os.freemem());
console.log("------------------------------");

/**
 * path 모듈
 */
const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file));
console.log("path.parse : ", path.parse(file));
console.log("------------------------------");

console.log("------------실습--------------");
console.log("1. 사용 가능한 메모리 : ", os.freemem());
console.log("2. 전체 메모리 용량 : ", os.totalmem());
console.log("3. 홈 디렉토리 경로 : ", os.homedir());

console.log("4. 경로 구분자 출력 : ", path.sep);
console.log("5. 현재 파일의 확장자 출력 : ", path.extname(file));
console.log("6. 현재 파일의 경로를 분리해서 출력 : ", path.parse(file));