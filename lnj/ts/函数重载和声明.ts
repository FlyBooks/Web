// function getName(name: string): string {
//   return name;
// }

// console.log(getName('Eva'));

// type getName = (name: string) => string;

// let getUserName: getName = function (name) {
//   return name;
// };

// console.log(getUserName('Selena'));

// let AddFun: (name: string, age: number) => string;

// AddFun = function (name, age) {
//   return "hhhhh";
// };

// console.log(AddFun("Eva", 18));

// let AddFun: (name: string, age: number) => string = function (name, age) {
//   age++;
//   console.log(age);
//   return "hh" + name;
// };

// AddFun("Eva", 18);

type AddFun = (name: string, major: string) => string;

let Person: AddFun = function (name, major) {
  return `${name}'s major is ${major}`;
};

//函数的重载1
function sumSome(x: number, y: number): number;
function sumSome(x: number, y: number, z: number): number;

function sumSome(x: number, y: number, z?: number): number {
  return x + y + (z ? z : 0);
}

console.log(sumSome(1, 2, 3));

//函数的重载2

function GetArray(len: number): number[];
function GetArray(str: string): string[];

function GetArray(value: number | string): any[] {
  let arr = [];
  if (typeof value === "number") {
    for (let i = 0; i < value; i++) {
      arr.push(i);
    }
  } else {
    arr = value.split("");
  }

  return arr;
}

console.log(GetArray(10));
console.log(GetArray("hello,ts"));
