"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
类属性修饰符：
public, protected, private, readonly
*/
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    say() {
        console.log(`${this.name} 今年 ${this.age} 岁`);
    }
}
let person = new Person("Xiao", 19, "male");
person.say();
class Stu extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;
    }
    say() {
        console.log(`${this.name}的专业是${this.major},性别是${this.gender}`);
    }
}
let stu1 = new Stu("Eva", 19, "female", "cs");
stu1.say();
