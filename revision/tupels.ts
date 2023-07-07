let cl = console.log;

// tupels >>  a fixed length array.
type Person = {
    fname: string;
    lname: string;
    age: number;
    userrole: [number, string, boolean];
}
let person: Person = {
    fname: "Jhon",
    lname: "Doe",
    age: 33,
    userrole: [2, "Admin", true]
}
// person.userrole[0] = "Admin";
// person.userrole[2] = "123";
// person.userrole[3] = 123
// person.userrole.push("hello")
// person.userrole.pop()
cl(person)
