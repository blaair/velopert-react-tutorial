const input = require("fs").readFileSync("./input.txt").toString().trim();

let answerArr = [];

// 단어를 대조하는 작업을 위해 반복문을 써야 하는데 반복문으로 걸러낼려면 의미있는 연속된 숫자열이 필요하다. 알파벳을 아스키코드라고 생각하고 이것을 문자 또는 문자열로 바꾸어보면 연속된 숫자 97~122 라는 걸 알 수 있다.

for (let i = 97; i <= 122; i++) {
    let alph = String.fromCharCode(i);
    let answer = input.indexOf(alph);
    answerArr += answer + " ";
}

console.log(answerArr)