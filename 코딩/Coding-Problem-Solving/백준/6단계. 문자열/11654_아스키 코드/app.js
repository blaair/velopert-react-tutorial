let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

// charCodeAt : 문자를 아스키코드로 변환 
// "문자열".charCodeAt([문자열 자릿수])
console.log(input.charCodeAt(0));