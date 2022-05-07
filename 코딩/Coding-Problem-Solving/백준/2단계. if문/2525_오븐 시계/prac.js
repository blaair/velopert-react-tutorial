const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let curHour = input[0].split(" ")[0];
let curMin = input[0].split(" ")[1];
let cookTime = input[1];

solution(+curHour, +curMin, +cookTime)

function solution(doneHour, doneMin, cookTime) {
    doneMin += cookTime;

    while (doneMin >= 60) {
        doneMin -= 60;
        doneHour += 1;
    }

    doneHour %= 24;
    console.log(doneHour, doneMin); 
}

