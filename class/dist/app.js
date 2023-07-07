"use strict";
let cl = console.log;
// singletone class (private constructor)
// A class by using which we can create only one instance/object
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.employees = [];
    }
    addEmp(empName) {
        this.employees.push(empName);
    }
    static createEmp(emp) {
        return {
            empName: emp
        };
    }
}
Department.piscalYear = "2022-23";
class Accounting extends Department {
    constructor(dname, id, reports) {
        super(dname, id);
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    describe() {
        cl(`This is department Accounting with id ${this.dId} `);
    }
    static getInstance(dname) {
        if (Accounting.instance) {
            return this.instance;
        }
        else {
            this.instance = new Accounting(dname, "D-456", ["ITR", "FORM-16"]);
            return this.instance;
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
