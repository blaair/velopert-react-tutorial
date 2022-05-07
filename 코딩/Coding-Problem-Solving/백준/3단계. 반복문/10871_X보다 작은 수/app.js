/* 
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
*/

let input = require('fs').readFileSync('./input.txt').toString().split('\n');
let [len, x] = input[0].split(" ").map(Number); 
let arr = input[1].split(" ").map(Number);

for (let i = 0; i <= len; i++) {
    if (arr[i] < x) {
        process.stdout.write(arr[i]);
    }
}
