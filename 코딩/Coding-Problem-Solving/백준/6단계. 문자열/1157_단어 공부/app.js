const fs = require('fs');
let input = fs
  .readFileSync('input.txt')
  .toString()
  .toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  // ex) a = 97 => result[0] 에 1을 더해줌
  result[input.charCodeAt(i) - 97]++;
}

const maxCount = Math.max(...result);
const maxIndex = result.indexOf(maxCount);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && maxIndex != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65));
