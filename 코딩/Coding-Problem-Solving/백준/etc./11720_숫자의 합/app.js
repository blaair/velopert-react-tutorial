// let fs = require('fs');
const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

// let input = fs.readFileSync('/dev/stdin').toString().split('');

solution(input[0], input[1]);

function solution(N, numbers) {
  let sum = 0;
  for (let i = 0; i < N; ++i) {
    sum += +numbers[i];
  }
  console.log(sum);
}
