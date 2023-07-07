let cl = console.log;
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const add = <HTMLElement>document.getElementById("add");

const addition = (n1:number, n2: number) => {
    cl(n1 + n2)
}
add.addEventListener("click", () => {
    addition(+num1.value, +num2.value)
})