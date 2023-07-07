// let cl = console.log;

// // readonly access modifier >> A member whos value can not change(inside class, child class or there instnaces)
// //  once it get initilized
// class Department {
//     private employees: Array<string> = [];
//     constructor(public dName: string, private readonly dId: string) {

//     }
//     public describe() {
//         cl(`This is department ${this.dName} with id ${this.dId}`)
//     }
//     public addEmp(empName: string) {
//         // ....
//         // this.dId = "qwerty"
//         this.employees.push(empName)
//     }
// }


// let department = new Department("Accounting", "D-123");
// department.addEmp("Jen")
// cl(department)

// // department.dId = 
