export {};
/*
1.存储器：
通过getters/setters来获取对对象成员的访问
*/

class Person {
  private _age: number = 0;
  private _firstname: string = "";
  private _lastname: string = "";
  set age(theAge: number) {
    console.log("calling set age method...");
    this._age = theAge;
  }

  get age(): number {
    return this._age;
  }

  public set firstname(theFullname: string) {
    let names: string[] = theFullname.split(" ");
    this._firstname = names[0];
  }

  public get firstname() {
    return `${this._firstname}-----${this._lastname}`;
  }
}

let p = new Person();
p.age = 19;
console.log(p.age);
p.firstname = 'Eva Liu';

console.log(p.firstname);
