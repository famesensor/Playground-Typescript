// const userName = 'Fame';
// let age = 30;

// age = 29;

// default fn
// function add(a: number, b: number) {
//     let result;
//     result = a + b;

//     return result;
// }

// // Arrow function
// const add = (a: number, b: number) => a + b;

// const printOutput: (a: string | number) => void = (output) =>
//     console.log(output);

// printOutput(add(2, 5));

// const button = document.querySelector('button')!;

// button.addEventListener('click', (e) => {
//     console.log(e);
// });

// Default fn parameters
const power = (a: number, b: number = 2) => a * b;

// printOutput(power(2));

// Sprenad Oprator
const hobbies = ['Sport', 'Cooking'];
const activateHobbies = ['Gaming', ...hobbies];

// activateHobbies.push(...hobbies);

console.log(activateHobbies);

const person = {
    nickname: 'fame',
    age: 30
};

const copiedPerson = { ...person };
// copiedPerson = pointer or memory of person
// const copiedPerson = person ;

// Rest parameter
const add = (...number: number[]): number => {
    return number.reduce((prev, cur) => prev + cur, 0);
};

const addNumber = add(5, 6, 7, 8);
console.log(addNumber);

// Array & Object Destructuring
const [hobby1, hobby2, ...remaininghoobies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const { nickname: userName, age } = person;
console.log(userName, age, person);
