export {};

abstract class Person {
  abstract name: string;
  abstract say(): void;

  eat(): void {
    console.log(`${this.name}正在吃东西`);
  }
}

class Student extends Person {
  name: string = "Eva";
  say(): void {
    console.log(`我的名字是${this.name}`);
  }
}

let stu = new Student();
stu.eat();
