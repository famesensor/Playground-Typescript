// Type
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// Intersection
type ElevatedEmployee = Admin & Employee;

// // Interface
// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
    name: 'Fame',
    privileges: ['create-server'],
    startDate: new Date()
};

// Type Guards
type Combinale = string | number;
type Numberic = number | boolean;

type Universal = Combinale & Numberic;

// Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinale, b: Combinale) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}

const result = add('Fame', ' JT');
result.split(' ');

// Optional Chanining
const fetchedUserData = {
    id: 'u1',
    name: 'fame',
    job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = undefined;

const storedDate = userInput ?? 'DEFAULT';

console.log(storedDate);
