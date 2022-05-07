let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(x => Number(x));

let max = Math.max(...input);

console.log(max)
console.log(input.indexOf(max) + 1)