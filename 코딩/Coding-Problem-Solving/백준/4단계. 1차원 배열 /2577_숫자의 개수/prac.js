let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(Number);
let result = String(input[0] * input[1] * input[2])

for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
        if (i === Number(result[j])) {
            count++;
        }
    }
    console.log(count);
}