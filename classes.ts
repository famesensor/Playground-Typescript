abstract class Department {
    static fiscalYear = 2021;
    // private readonly id: string;
    // private name: string;
    protected employess: string[] = [];

    // Short initializtion
    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        console.log(Department.fiscalYear); // Access static value/method in class
    }

    static createEmployess(name: string) {
        return { name: name };
    }

    abstract description(this: Department): void;

    addEmployee(employess: string) {
        // validation etc.
        // this.id = 2; // readonly
        this.employess.push(employess);
    }

    printEmployessInformation() {
        console.log(this.employess.length);
        console.log(this.employess);
    }
}

// Inheritance
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    description() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}

// Singletins & Private Constructor
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    // Getters
    get moestRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    // Setters
    set moestRecentReport(value: string) {
        if (!value) {
            throw new Error('Pleasr pas in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private readonly reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getIntance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('2', []);
        return this.instance;
    }

    // Override
    description() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
    addEmployee(name: string) {
        if (name === 'Max') return;
        this.employess.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployess('Fame');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('1', ['Max']);

it.addEmployee('Man');
it.addEmployee('Woman');

it.description();
it.name = 'NEW IT';
it.printEmployessInformation();

console.log(it);

// const accounting = new AccountingDepartment('2', []);
const accounting = AccountingDepartment.getIntance();
const accounting2 = AccountingDepartment.getIntance();

console.log(accounting, accounting2);

accounting.moestRecentReport = 'Something word';
accounting.addReport('Something went wrong...');
console.log(accounting.moestRecentReport);

accounting.addEmployee('Man');
accounting.addEmployee('Max');
// accounting.printEmployessInformation();
// accounting.printReports();
accounting.description();
