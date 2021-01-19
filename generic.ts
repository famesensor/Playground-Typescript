// const names: Array<string> = ['Fame', 'JT']; // string[]
// names[0].split(' ');

// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then((data) => {
//     data;
// });

// Function generic, Constraints
const merge = <T extends object, U extends object>(objA: T, objB: U): T & U => {
    return Object.assign(objA, objB);
};

// const mergedObj = merge({ name: 'Fame' }, { age: 22 }) as {name: string,age:number};
const mergedObj = merge({ name: 'Fame', hobbles: ['Sports'] }, { age: 22 });
// const mergedObj2 = merge({ name: 'Fame' }, { age: 22 });
console.log(mergedObj.name);

// Another generic func
interface Lengthy {
    length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
};

console.log(countAndDescribe('Hi there!'));

// keyof Constraint
const extractAndConvert = <T extends object, U extends keyof T>(
    obj: T,
    key: U
) => {
    return `Value : ${obj[key]}`;
};

console.log(extractAndConvert({ name: 'Fame' }, 'name'));

// Generic Classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItem() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Fame');
textStorage.addItem('UU');
textStorage.removeItem('Fame');
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const fameObj = { name: 'Fame' };
// objStorage.addItem(fameObj);
// objStorage.addItem({ name: 'Manu' });

// objStorage.removeItem({ name: 'M' });
// console.log(objStorage.getItem());

// Gerneric Utility Types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

const createCourseGola = (
    title: string,
    description: string,
    date: Date
): CourseGoal => {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['Fame', 'Sport'];
// names.push('Man-u');
// names.pop();
