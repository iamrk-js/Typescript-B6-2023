let cl = console.log;

// type, interface and class
// type Person = {
//     fname: string,
//     lname: string,
//     age: number,
//     skills: string[],
//     gender?: string
// }

interface Iperson {
    fname: string;
    lname: string;
    age: number;
    // skills : Array<string>
    skills: string[]
}

let person1: Iperson = {
    fname: "JHon",
    lname: "Doe",
    age: 33,
    skills: ["Angular", "TS", "JS"],
}

let person2: Iperson = {
    fname: "July",
    lname: "Doe",
    age: 23,
    skills: ["Node", "Express", "MongoDB"],
}
let allPersons: Iperson[] = [
    {
        fname: "JHon",
        lname: "Doe",
        age: 33,
        skills: ["Angular", "TS", "JS"],
    },
    {
        fname: "July",
        lname: "Doe",
        age: 23,
        skills: ["Node", "Express", "MongoDB"],
    }
]



let skills: (string | number)[] = ["Angular", "Node", "Express", "MongoDB", 123];

let ages: number[] = [10, 20, 30, 40, 506, 0];

// type Product = {
//     pName : string,
//     pModel : string,
//     price : number,
//     rating : number
// }

interface Iproduct {
    pName: string;
    pModel: string;
    price: number;
    rating: number
}

let samsung: Iproduct = {
    pName: "samsung",
    pModel: "g4",
    price: 79999,
    rating: 4
}

let iphone: Iproduct = {
    pName: "samsung",
    pModel: "i14",
    price: 179999,
    rating: 4
}

let allProducts: Iproduct[] = [
    {
        pName: "samsung",
        pModel: "g4",
        price: 79999,
        rating: 4
    },
    {
        pName: "samsung",
        pModel: "i14",
        price: 179999,
        rating: 4
    }
]

type Passenger = {
    fname: string,
    lname: string,
    isCheckedIn: boolean,
    isCheckedOut: boolean,
    childs: number | null
}

interface Ipassenger{
    fname : string,
    lname : string,
    isCheckedIn : boolean,
    isCheckedOut : boolean,
    childs : number | null
}
let passenger1: Ipassenger = {
    fname: "Jhon",
    lname: "Doe",
    isCheckedIn: true,
    isCheckedOut: false,
    childs: 2
}
let passenger2: Ipassenger = {
    fname: "July",
    lname: "Doe",
    isCheckedIn: true,
    isCheckedOut: true,
    childs: null
}
let allPassengers : Ipassenger[] = [passenger1, passenger2]