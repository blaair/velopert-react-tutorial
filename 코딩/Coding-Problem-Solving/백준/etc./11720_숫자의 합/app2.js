const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

// * N개의 숫자를 split 메서드로 나눠주는 것은 똑같지만, 굳이 for 문은 사용할 필요 없이 누적시켜주는 reduce 메서드를 사용하여 값을 누적시켜줘도 된다.

let num = input[1].split('');
let sum = num.reduce((acc, v) => {
  return (acc += v * 1);
}, 0);

console.log(sum);
