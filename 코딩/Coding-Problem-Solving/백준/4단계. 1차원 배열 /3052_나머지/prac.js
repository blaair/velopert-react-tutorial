let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const count = new Set(input.map(x => x % 42));
console.log(count)