// let cl = console.log;
// // abstract class
// abstract class Department {
//     protected employees: Array<string> = [];
//     static piscalYear : string = "2022-23"
//     constructor(public dName: string, protected readonly dId: string) {

//     }
//     // public describe() {
//     //     cl(`This is department ${this.dName} with id ${this.dId}`)
//     // }
//     abstract describe() : void;
//     public addEmp(empName: string) {
//         this.employees.push(empName)
//     }
//     static createEmp(emp: string) {
//         return {
//             empName: emp
//         }
//     }
// }

// class Accounting extends Department {
//     private lastReport;
//     constructor(id: string, private reports: string[]) {
//         super("Accounting", id);
//         this.lastReport = reports[reports.length - 1]
//     }
//     describe(): void {
//         cl(`This is department Accounting with id ${this.dId} `)
//     }
//     get accessLastreport(): string {
//         return this.lastReport
//     }
//     set accessLastreport(newReportName: string) {
//         this.lastReport = newReportName;
//         this.reports[this.reports.length - 1] = newReportName;
//     }
// }



