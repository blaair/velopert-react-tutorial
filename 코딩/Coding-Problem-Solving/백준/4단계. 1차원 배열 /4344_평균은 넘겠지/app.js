/* 평균은 넘겠지

5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');
console.log(input);
const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(+arr[i]);
  }

  // * 위 4줄의 코드를 map을 이용해 한줄로 쓸 수 있다.
  // const arr = input[i].split(' ').map((item) => Number(item));
  const testCase = {
    N: arr[0],
    arr: newArr,
  };

  inputTestCase.push(testCase);
}

// * '입력을 어떻게 주면은 풀 수 있을까?' 생각해보기
// * 미리 주석으로 구체적으로 적어본다.
/*
C = 5
testCase = [
  {
    N: 5,
    arr: [50, 50, 70, 80, 100]
  }
  {
    N: 7,
    arr: [50, 50, 70, 80, 100]
  }
  ...
]
*/
function solution(C, testCase) {
  console.log('C : ', C);
  console.log('testCase : ', testCase);
}

solution(inputC, inputTestCase);
