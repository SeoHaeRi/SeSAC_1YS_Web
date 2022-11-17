const url = require("url");
console.log(url);
console.log(url.parse);
var obj = url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%A7%91%EC%97%90%EA%B0%80%EA%B3%A0&oquery=%EC%A7%91%EC%97%90%EA%B0%80%EA%B8%B0&tqi=h3UgUsp0Yihssgvlo5dssssssVZ-482984');
console.log("obj : ", obj);
var string = new url.URL('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%A7%91%EC%97%90%EA%B0%80%EA%B3%A0&oquery=%EC%A7%91%EC%97%90%EA%B0%80%EA%B8%B0&tqi=h3UgUsp0Yihssgvlo5dssssssVZ-482984');
console.log(string.searchParams.keys());
console.log(string.searchParams.getAll('where'));
console.log(string.searchParams.getAll('query'));
console.log(string.searchParams.getAll('oquery'));

string.searchParams.append('age', '25');
console.log(string.searchParams.keys());
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age'));

console.log("-------------실습------------");
string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');
console.log("1. 모든 키 : ", string.searchParams.keys());
console.log("2. 모든 값 : ", string.searchParams.values());
string.searchParams.delete('sm');
console.log("3. sm 키 삭제 후 모든 키 : ", string.searchParams.keys());