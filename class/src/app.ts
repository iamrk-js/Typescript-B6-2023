
let cl = console.log;
// singletone class (private constructor)
// A class by using which we can create only one instance/object
abstract class Department {
    protected employees: Array<string> = [];
    static piscalYear: string = "2022-23"
    constructor(public dName: string, protected readonly dId: string) {

    }
    abstract describe(): void;
    public addEmp(empName: string) {
        this.employees.push(empName)
    }
    static createEmp(emp: string) {
        return {
            empName: emp
        }
    }
}

class Accounting extends Department {
    private lastReport;
    static instance: Accounting;
    private constructor(dname: string, id: string, private reports: string[]) {
        super(dname, id);
        this.lastReport = reports[reports.length - 1]
    }
    describe(): void {
        cl(`This is department Accounting with id ${this.dId} `)
    }
    static getInstance(dname: string) {
        if (Accounting.instance) {
            return this.instance
        } else {
            this.instance = new Accounting(dname, "D-456", ["ITR", "FORM-16"])
            return this.instance
        }
    }
}

cl(Accounting.instance); //undefined  window scope/global scope
let acc1 = Accounting.getInstance("Accunting 1");
cl(Accounting.instance);
let acc2 = Accounting.getInstance("Accunting 2");


// let accounting1 = new Accounting("Accounting 1", "D-456", ["ITR", "FORM-16"]);
// cl(accounting1)
// let accounting2 = new Accounting("Accounting 2", "D-456", ["TDS", "Salary Slips"]);
// cl(accounting2)


