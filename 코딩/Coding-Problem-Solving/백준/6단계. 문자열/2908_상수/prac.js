const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ');

const [a, b] = input.map((v) => [...v].reverse().join(''));

console.log(a > b ? a : b);
