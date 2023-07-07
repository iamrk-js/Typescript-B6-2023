"use strict";
// let cl = console.log;
// // static
// class Department {
//     protected employees: Array<string> = [];
//     static piscalYear : string = "2022-23"
//     constructor(public dName: string, private readonly dId: string) {
//     }
//     public describe() {
//         cl(`This is department ${this.dName} with id ${this.dId}`)
//     }
//     public addEmp(empName: string) {
//         this.employees.push(empName)
//     }
//     static createEmp(emp: string) {
//         return {
//             empName: emp
//         }
//     }
// }
// cl(Department.createEmp("zaq"));
// cl(Department.piscalYear)
// class Accounting extends Department {
//     private lastReport;
//     constructor(id: string, private reports: string[]) {
//         super("Accounting", id);
//         this.lastReport = reports[reports.length - 1]
//     }
//     get accessLastreport(): string {
//         return this.lastReport
//     }
//     set accessLastreport(newReportName: string) {
//         this.lastReport = newReportName;
//         this.reports[this.reports.length - 1] = newReportName;
//     }
// }
// cl(Accounting.createEmp("Accotant zaq"))
// cl(Accounting.piscalYear)
// let accounting = new Accounting("D-789", ["TDS"]);
// // accounting.piscalYear
// // cl(accounting.lastReport)
// cl(accounting.accessLastreport)
// accounting.accessLastreport = "TDS-4 2022-23";
// cl(accounting)
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
