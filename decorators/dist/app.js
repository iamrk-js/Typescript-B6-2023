"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let cl = console.log;
// ts >> class >> 
// decorators
// we can use/apply decorators on class, methods, properties
// function logMsg(constructor : Function){
//     cl(`Instanace is created by using class Person`)
// }
function logMsg(className) {
    return function (constructor) {
        cl(`Instanace is created by using class ${className}`);
    };
}
let Person = class Person {
    constructor() {
    }
};
Person = __decorate([
    logMsg("Person")
], Person);
let p = new Person();
let Department = class Department {
    constructor() {
    }
};
Department = __decorate([
    logMsg("Department")
], Department);
let d1 = new Department();
// html data >> which we want to show on UI
// elementRefrence >>  html data
function templating(template, elemId) {
    return function (constructor) {
        let getEle = document.getElementById(elemId);
        getEle.innerHTML = template;
    };
}
let HeaderUi = class HeaderUi {
    constructor() {
    }
};
HeaderUi = __decorate([
    templating("<h1>I love Angular</h1>", "header")
], HeaderUi);
let headingUi = new HeaderUi();
