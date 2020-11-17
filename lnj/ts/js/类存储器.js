"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
1.存储器：
通过getters/setters来获取对对象成员的访问
*/
class Person {
    constructor() {
        this._age = 0;
        this._firstname = "";
        this._lastname = "";
    }
    set age(theAge) {
        console.log("calling set age method...");
        this._age = theAge;
    }
    get age() {
        return this._age;
    }
    set firstname(theFullname) {
        let names = theFullname.split(" ");
        this._firstname = names[0];
    }
    get firstname() {
        return `${this._firstname}-----${this._lastname}`;
    }
}
let p = new Person();
p.age = 19;
console.log(p.age);
p.firstname = 'Eva Liu';
console.log(p.firstname);
