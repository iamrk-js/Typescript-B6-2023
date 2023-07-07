let cl = console.log;

type Combinable = number | string;

function combine(n1:number, n2:number) : number;
function combine(n1:string, n2:string) : string;
function combine(n1:string, n2:number) : string;
function combine(n1:number, n2:string) : string;
function combine(n1:Combinable, n2:Combinable) {
    if(typeof n1 === "number" && typeof n2 === "number"){
        return n1 + n2
    }else{
        return n1.toString() + n2.toString()
    }
}

let result1 = combine(100,200);

// result1. 

let result2 = combine("Hello ", "TS You are so easy...");

// result2.