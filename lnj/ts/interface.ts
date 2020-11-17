interface Person {
  name: string;
  age?: number;
  readonly id: number;
}

let person1: Person = {
  id: 19,
  age: 18,
  name: "Eva",
};
// person1.id = 20; ERROR
console.log(person1);

let per2: Person = {
  name: "string",
  id: 20,
};

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  }
  return x.split("").reverse().join("");
}

/*
索引签名：用于描述那些“通过索引得到”的类型， 比如arr[0], arr['key']
*/
interface FullName {
  [propName: string]: string;
}

let obj2: FullName = {
  firstName: "xiaoming",
  lastName: "huang",
};

interface TestProp {
  [propName: number]: string;
}

let books: TestProp = {
  "1": "fly",
  2: "sky",
  3: "what",
  4: "xxi",
};

console.log(books, "books");
