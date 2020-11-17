"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.name = "Eva";
        this.age = 18;
    }
    say() {
        console.log(`${this.name} is me`);
    }
}
class Student {
    constructor() {
        this.gender = "female";
        this.name = "Eva";
        this.age = 18;
    }
    say() {
        return `${this.name}去变成一个可以跟阿多好好说话的人`;
    }
}
let stu = new Student();
console.log(stu.say());
