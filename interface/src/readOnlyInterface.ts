
// let cl = console.log;
// //Readonly interface proprties

// // If we use readonly inside interface >> It will not allow to change  value on instance
// // If we use readonly inside class >>  It will not allow to change  value inside class
// interface Igreetable {
//     readonly name: string;
//     greet(phrase: string): void;
// }
// let user1: Igreetable;
// class Person implements Igreetable {
//     readonly test
//     constructor(public readonly name: string, public age: number) {
//     }
//     greet(phrase: string): void {
//         // this.name = ""
//         cl(`${phrase} ${this.name}`)
//     }
// }
// user1 = new Person("Jhon", 33);
// // user1.name = "James";
// cl(user1)
