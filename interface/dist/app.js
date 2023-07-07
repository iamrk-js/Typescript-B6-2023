"use strict";
let cl = console.log;
let user1;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        cl(`${phrase} ${this.name}`);
    }
}
user1 = new Person("Jhon", 33);
// user1.name = "James";
cl(user1);
