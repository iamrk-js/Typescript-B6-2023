"use strict";
// let cl = console.log;
// // method/property overriding
// //protected : that will available within same class and there derived(child) class
// class Department {
//     // private employees: Array<string> = [];
//     protected employees: Array<string> = [];
//     constructor(public dName: string, private readonly dId: string) {
//     }
//     public describe() {
//         cl(`This is department ${this.dName} with id ${this.dId}`)
//     }
//     public addEmp(empName: string) {
//         this.employees.push(empName)
//     }
// }
// class ITDepartment extends Department {
//     constructor(id: string, private admins: Array<string>) {
//         super("IT Department", id)
//     }
//     addAdmins(adminName: string) {
//         this.admins.push(adminName)
//     }
//     addEmp(empName: string): void {
//         if (empName === "Ravi") {
//             return;
//         } else {
//             this.employees.push(empName)
//         }
//     }
// }
// let itDepart = new ITDepartment("D-456", ["May"]);
// cl(itDepart)
// itDepart.describe()
// itDepart.addAdmins("James");
// cl(itDepart)
// // itDepart.employees 
// itDepart.addEmp("Ravi");
// itDepart.addEmp("July");
// cl(itDepart)
