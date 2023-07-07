let cl = console.log;

interface IerrorConatainer {
    [prop : string]: string
}

let emailError: IerrorConatainer = {
    email: "Invalid email id"
}

let passwordError : IerrorConatainer = {
    password: "Invalid password"
}

let ifCheck : IerrorConatainer = {
    ifCheck: "Invalid password"
}

interface Iperson {
    fname: string
}

let p: Iperson = {
    fname: ""
}