// function return type
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(`Result: ${num}`);
}

// function and Callback
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(10, 12));

// let comvineValues: Function
let combineValues: (a: number, b: number) => number; // defind function and return value void, number and ...

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandler(10, 20, (result) => {
    console.log(result);
});
