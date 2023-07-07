let cl = console.log;

const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
// const addBtn = <HTMLElement>document.getElementById("addBtn");
// const addBtn = document.getElementById("addBtn") as HTMLElement;
const addBtn = document.getElementById("addBtn")!;
// assertion

// TypeCasting >> as HTMLElement
const addition = (n1: number, n2: number) => {
    cl(n1 + n2)
}
// nullcheker >> ?
addBtn.addEventListener("click", () => {
    addition(+num1.value, +num2.value)
})












let data: { fname: string, lname: string, email: string | null }[] = [
    {
        fname: "Ravi",
        lname: "Niturkar",
        email: null
    },
    {
        fname: "qaz",
        lname: "qaz",
        email: "qaz@gmail.com"
    },
]

for (const i of data) {
    cl(i.email?.toUpperCase())
}   