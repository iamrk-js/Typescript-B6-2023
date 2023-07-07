let cl = console.log;
type MathOp = (n1:number, n2:number) => number;
// function type
function add(n1: number, n2: number): number {
    return n1 + n2
}
function multi(n1:number, n2:number) : number{
    return n1 * n2
}
function printResult(num: number): void {
    cl(`The result is ${num}`)
}
let test : MathOp;
test = add;
test = multi;
// test = 10;
// test = printResult;
cl(test(20,30))


