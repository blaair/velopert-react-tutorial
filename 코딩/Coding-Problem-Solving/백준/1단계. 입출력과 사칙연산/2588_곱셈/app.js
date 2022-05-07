const [a, b] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
// a: 472, b: 385

// 일의 자리
// b를 10으로 나눈 나머지 값
const first = b % 10; // 5

// 십의 자리
// (b를 100으로 나눈 나머지)/10
const second = Math.floor((b % 100) / 10); // 8

// 백의 자리
// (b를 100으로 나눈 값)
// 나머지를 뗀 몫을 가지고 옴
const third = Math.floor(b / 100); //3

console.log(a * first);
console.log(a * second);
console.log(a * third);
console.log(a * b);
