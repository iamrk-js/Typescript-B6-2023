let cl = console.log;
type Combinable = number | string;
function combine(n1: Combinable, n2: Combinable) {
    let result: any;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}


let x = 10;
// literal type
const y = 5; // typeof y is number 5 and its value is also number 5

let z : 20 = 20;
// z = 100;
let impSkill : "javaScript" = "javaScript";

// n1 > number & n2 > numer 
// n1 > number & n2 > string 
// n1 > string & n2 > numer 
// n1 > string & n2 > string 

cl(combine(100, 100)) // 200
cl(combine("100", "100")) // 100100