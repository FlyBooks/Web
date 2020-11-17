import { getInputClassName } from "antd/lib/input/Input";

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

let person = new Person("hiahia");
console.log(person.getName());
