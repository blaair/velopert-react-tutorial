let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const add = num1 + num2;
const minus = num1 - num2;
const multiple = num1 * num2;
const divide = parseInt(num1 / num2);
const remain = num1 % num2;

console.log(`${add}\n${minus}\n${multiple}\n${divide}\n${remain}`);
