"use strict";
// let cl = console.log;
// // Static Method/Property >> A method/property whic can used on classname not on there instance 
// class Department {
//     dName: string;  // fields
//     dId: string;
//     private employees: Array<string> = [];
//     constructor(dname: string, did: string) {
//         this.dName = dname;
//         this.dId = did;
//     }
//     describe() {
//         cl(`This is Deaprtment ${this.dName}`)
//     }
//     addEmployee(emp: string) {
//         /// .....
//         this.employees.push(emp)
//     }
//     printNoOfEmp() {
//         return this.employees.length
//     }
//     static createEmp(empname: string) {
//         return { name: empname }
//     }
// }
// let accounting = new Department("Accounting", "D-123");
// accounting.addEmployee("May");
// cl(accounting);
// accounting.addEmployee("Jhon");
// // accounting.employees.push("Jhon");
// cl(accounting);
// accounting.describe();
// cl(accounting.printNoOfEmp());
// // accounting.createEmp()
// cl(Department.createEmp("James"))
