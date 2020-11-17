export {};

class Person {
  name: string = "Eva";
  age: number = 18;
  say(): void {
    console.log(`${this.name} is me`);
  }
}

interface personInterface extends Person {
  gender: string;
}

class Student implements personInterface {
  gender: string = "female";
  name: string = "Eva";

  age: number = 18;

  say() {
    return `${this.name}去变成一个可以跟阿多好好说话的人`;
  }
}

let stu = new Student();
console.log(stu.say());
