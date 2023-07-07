let cl = console.log;

// ts >> class >> 
// decorators

// we can use/apply decorators on class, methods, properties

// function logMsg(constructor : Function){
//     cl(`Instanace is created by using class Person`)
// }

function logMsg(className: string) {
    return function (constructor: Function) {
        cl(`Instanace is created by using class ${className}`)
    }
}

@logMsg("Person")
class Person {
    constructor() {
    }
}

let p = new Person();

@logMsg("Department")
class Department {
    constructor() {
    }
}
let d1 = new Department()

// html data >> which we want to show on UI
// elementRefrence >>  html data

function templating(template: string, elemId: string) {
    return function(constructor : Function){
        let getEle = document.getElementById(elemId) as HTMLElement;
        getEle.innerHTML = template
    }
}
@templating("<h1>I love Angular</h1>", "header")
class HeaderUi {
    constructor(){

    }
}

let headingUi = new HeaderUi()