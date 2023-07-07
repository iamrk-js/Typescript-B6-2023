
let cl =console.log;




type Person = {  // type alias, interface, class
    fname: string,
    lname: string,
    age: number,
    skills : string[]
}
let person: Person = {
    fname: "Jhon",
    lname: "Doe",
    age: 33,
    skills : ["HTML", "CSS","JS","TS","Angular"]
}

for (const i of person.skills) {
    cl(i.toLowerCase())
}














function addition(n1: number, n2: number, showresult: boolean, phrase: string) {
    if (showresult) {
        cl(`${phrase} ${n1 + n2}`)
    } else {
        return `${phrase} ${n1 + n2}`;
    }
}


cl(addition(100, 300, false, "The result is"));
(addition(1000, 3000, true, "The result is"));