const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim();

const splitInput = input.split('');
const charMap = {};
let charStack = '';
let counter = 3;

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  charStack += String.fromCharCode(i);

  if (
    charStack.length === 3 &&
    i !== 'R'.charCodeAt(0) &&
    i !== 'Y'.charCodeAt(0)
  ) {
    charMap[charStack] = counter;
    counter++;
    charStack = '';
  } else if (charStack.length === 4) {
    charMap[charStack] = counter;
    counter++;
    charStack = '';
  }
}

// console.log(charMap); { ABC: 3, DEF: 4, GHI: 5, JKL: 6, MNO: 7, PQRS: 8, TUV: 9, WXYZ: 10 }

const result = splitInput.reduce((acc, char) => {
  for (let stage in charMap) {
    if (stage.includes(char)) {
      acc += charMap[stage];
    }
  }
  return acc;
}, 0);

console.log(result);

/*
 'A'부터 'Z'까지 진행하는 for loop을 열고, 'PQRS', 'WXYZ'는 예외로 들어가도록 조건문을 걸어주었다.
( i !== 'R'charCodeAt(0) && i !== 'Y'.charCodeAt(0) )으로 조건을 넣어준 이유는,
'PQRS', 'WXYZ' 이 2가지만 제외하면 모두 길이가 3이다. 그래서 길이 3으로 저장되기 전인 R or Y에서 저장을 차단하고,
앞의 두 문자가 각각 합쳐져 길이가 4가 되었을 때 key로 저장되도록 했다.

Object를 만들어준 후에, 입력 받고 split('')한 값에 reduce달았고, 안에 Object를 반복하는 for ... in loop을 열어주었다.
그렇게 입력받은 값 중에 각 key에 해당하는 문자가 있다면, acc에 해당 key의 value를 중복 저장해주고 return 해주었다.
결과적으로 result값에 전화를 걸기 위해 필요한 시간이 저장된다.
*/
