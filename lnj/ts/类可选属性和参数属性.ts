export {};
class Person {
  name: string;
  age?: number; //可选属性

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Eva");

//参数属性：用来简化constructor里面的代码

class Animal {
  constructor(public animal: string, public food: string) {}
}

let animal = new Animal("Dog", "dog food");
console.log(animal);
