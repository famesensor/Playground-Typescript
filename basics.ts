// Type => string, boolean, number
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${phrase} ${result}`);
    } else {
        return n1 + n2;
    }
}

let number1: number; // 5.0
number1 = 1;
const number2 = 6.8;
const printResult = true;
let resultPhrase = 'Result is : ';
add(number1, number2, printResult, resultPhrase);
