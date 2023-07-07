// let cl = console.log;
// // intersection type
// interface Admin {
//     name: string,
//     privieges: Array<string>
// }
// interface Emp {
//     name: string,
//     startDate: Date,
// }
// // interface ElevetedEmp extends Admin, Emp {}
// type ElevetedEmp = Admin & Emp;
// let emp1: ElevetedEmp;

// emp1 = {
//     name: "Jhon",
//     privieges: ["can Hire"],
//     startDate: new Date(2021, 7)
// }


// type Combinable = number | string; // union
// type Numeric = string | boolean | number; // union

// type ComNum = Combinable & Numeric // it is intersection of union types

// let x: ComNum;

// x = "true";
// x = 123;
