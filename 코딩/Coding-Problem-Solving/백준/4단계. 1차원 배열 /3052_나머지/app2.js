let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

// Set 객체를 이용하여 배열의 중복값 제거
// 중복값을 제거한 후 길이를 반환한다.
const count = new Set(input.map(x => x % 42));
console.log(count);