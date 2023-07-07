let cl = console.log;

const info = document.getElementById("info") as HTMLElement;

// const userName = document.getElementById("userName") as HTMLInputElement;
const userName = <HTMLInputElement>document.getElementById("userName");