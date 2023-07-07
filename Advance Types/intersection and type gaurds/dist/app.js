"use strict";
let cl = console.log;
let emp1;
emp1 = {
    name: "Jhon",
    privieges: ["can Hire"],
    startDate: new Date(2021, 7)
};
function add(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
emp1 = {
    name: "Jhon",
    privieges: ["can Hire"],
    startDate: new Date(2021, 7)
};
// function printEmpInfo(e : ElevetedEmp){
//     cl(e.name);
//     cl(e.privieges)
//     cl(e.startDate)
// }
function printEmpInfo(e) {
    cl(e.name);
    // cl(e.privieges);
    // cl(e.startDate);
    if ("privieges" in e) {
        cl(e.privieges);
    }
    if ("startDate" in e) {
        cl(e.startDate);
    }
}
printEmpInfo(emp1);
printEmpInfo({ name: "May", privieges: ["Can Hire Admins"] });
class Car {
    drive() {
        cl(`Driving a Car...`);
    }
}
class Truck {
    drive() {
        cl(`Drving a Truck...`);
    }
    loadcargo(amount) {
        cl(`Loading a crago of ${amount}`);
    }
}
let v1 = new Car();
let v2 = new Truck();
// v2.loadcargo(1000)
// v1.drive()
function useVehical(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadcargo(100);
    }
}
useVehical(v1);
useVehical(v2);
