"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person = new Person("Eva");
//参数属性：用来简化constructor里面的代码
class Animal {
    constructor(animal, food) {
        this.animal = animal;
        this.food = food;
    }
}
let animal = new Animal("Dog", "dog food");
console.log(animal);
