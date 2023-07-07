let cl = console.log;
type Combinable = number | string;
function combine(n1: Combinable, n2: Combinable, resultConvrsion:  "as-number" | "as-string") {
    let result: any;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString()
    }
    if(resultConvrsion === "as-number"){
        return +result;
    }
    if(resultConvrsion === "as-string"){
        return result.toString()
    }
}
cl(combine(100, 200, "as-string")) // 300 number >> string
cl(combine("100", 200, "as-number")) // 100200 string >> number
// cl(combine("100", 200, "asNumber"))
// n1 : number + n2 : number >> result : number
// n1 : string + n2 : number >> result : string
// n1 : number + n2 : string >> result : string
// n1 : string + n2 : string >> result : string