let input = require('fs').readFileSync('./input.txt').toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution(input[0], input[1])

function solution(H, M) {
    M -= 45;

    if (M < 0) {
        M = M + 60;
        H--;

        if (H === -1) {
            H = 23;
        }

    }

    console.log(H + ' ' + M);
}