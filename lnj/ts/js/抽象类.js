"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    eat() {
        console.log(`${this.name}正在吃东西`);
    }
}
class Student extends Person {
    constructor() {
        super(...arguments);
        this.name = "Eva";
    }
    say() {
        console.log(`我的名字是${this.name}`);
    }
}
let stu = new Student();
stu.eat();
