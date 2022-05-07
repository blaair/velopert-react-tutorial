const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

// Regular Expression
var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(regex, ' ');
// 2개 이상 문자를 갖는 크로아티아 알파벳은 공백으로 변경되어 1개의 문자를 갖게 된다.

console.log(result.length);
