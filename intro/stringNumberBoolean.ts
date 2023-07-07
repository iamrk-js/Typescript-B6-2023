// working with numbers , booleans and strings
let cl = console.log;
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        cl(`${phrase} ${n1 + n2}`)
    } else {
        return `${phrase} ${n1 + n2}`
    }
}
let num1 = 10;
let num2 = 20;
// (add(num1, num2, true));
cl(add(num1, num2, false, "The addition is"))

