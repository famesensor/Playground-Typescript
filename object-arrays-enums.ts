// Type => Object, Arrays, Any[], Tuples, enum
// const person: {
//     name: string;
//     age: number;
//     food: string[];
//     role : 2
//     // role: [number, string]; // Make tulpe
//     sport: { football: boolean };
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

const person = {
    name: 'Fame',
    age: 22,
    food: [`Noodle`, 'Icecream'],
    role: Role.ADMIN,
    sport: {
        football: true
    }
};

// person.role.push('admin');

// Tuple dissupport
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person);

for (let food of person.food) {
    console.log(food);
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}
