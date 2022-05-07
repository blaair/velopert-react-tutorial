const fs = require('fs');
let [input] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

let newArr = input.split(' ');

if (newArr[0] === '') {
  newArr.pop();
}

console.log(newArr.length);
