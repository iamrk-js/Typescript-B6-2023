let cl = console.log;
// intersection type
interface Admin {
    name: string,
    privieges: Array<string>
}
interface Emp {
    name: string,
    startDate: Date,
}
// interface ElevetedEmp extends Admin, Emp {}
type ElevetedEmp = Admin & Emp;
let emp1: ElevetedEmp;

emp1 = {
    name: "Jhon",
    privieges: ["can Hire"],
    startDate: new Date(2021, 7)
}
type Combinable = number | string; // union
type Numeric = string | boolean | number; // union
type ComNum = Combinable & Numeric // it is intersection of union types

function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2
    } else {
        return n1.toString() + n2.toString();
    }
}

emp1 = {
    name: "Jhon",
    privieges: ["can Hire"],
    startDate: new Date(2021, 7)
}

type newEleEmp = Admin | Emp

// function printEmpInfo(e : ElevetedEmp){
//     cl(e.name);
//     cl(e.privieges)
//     cl(e.startDate)
// }
function printEmpInfo(e: newEleEmp) {
    cl(e.name);
    // cl(e.privieges);
    // cl(e.startDate);
    if ("privieges" in e) {
        cl(e.privieges)
    }
    if ("startDate" in e) {
        cl(e.startDate)
    }
}
printEmpInfo(emp1)
printEmpInfo({ name: "May", privieges: ["Can Hire Admins"] });
class Car {
    drive() {
        cl(`Driving a Car...`)
    }
}
class Truck {
    drive() {
        cl(`Drving a Truck...`)
    }
    loadcargo(amount: number) {
        cl(`Loading a crago of ${amount}`)
    }
}

type Vehical = Car | Truck;

let v1 = new Car();
let v2 = new Truck();
// v2.loadcargo(1000)
// v1.drive()
function useVehical(v: Vehical) {
    v.drive();
    if (v instanceof Truck) {
        v.loadcargo(100)
    }
}

useVehical(v1)
useVehical(v2)