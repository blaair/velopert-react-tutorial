const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim();

let idx = 0;
let counter = 0;

while (idx < input.length) {
  if (
    input[idx] === 'c' &&
    (input[idx + 1] === '=' || input[idx + 1] === '-')
  ) {
    idx += 2;
    counter++;
  } else if (
    input[idx] === 'd' &&
    input[idx + 1] === 'z' &&
    input[idx + 2] === '='
  ) {
    idx += 3;
    counter++;
  } else if (input[idx] === 'd' && input[idx + 1] === '-') {
    idx += 2;
    counter++;
  } else if (
    input[idx + 1] === 'j' &&
    (input[idx] === 'l' || input[idx] === 'n')
  ) {
    idx += 2;
    counter++;
  } else if (input[idx] === 's' && input[idx + 1] === '=') {
    idx += 2;
    counter++;
  } else if (input[idx] === 'z' && input[idx + 1] === '=') {
    idx += 2;
    counter++;
  } else {
    idx++;
    counter++;
  }
}

console.log(counter);
