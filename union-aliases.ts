// Union Types, Literal Types, Alias Types
type User = { name: string; age: number };
type Combinable = number | string; // Alias and Union
type ConversionDescription = 'as-number' | 'as-text'; // Alias Custom and liter

function combine(
    input1: Combinable,
    input2: Combinable,
    resulteConversion: ConversionDescription // literal type
) {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resulteConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resulteConversion === 'as-number') {
    //     result + result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

const u1: User = { name: 'Fame', age: 22 };
function greet(user: User) {
    console.log(`Hi I'm ${user.name}`);
}

const combineAges = combine(20, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('20', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Sathit', 'Jt', 'as-text');
console.log(combineNames);

greet(u1);
