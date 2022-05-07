let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else if (a === b) {
  console.log('==');
}
