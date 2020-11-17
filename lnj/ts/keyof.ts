export {}; //解决cannot redeclare block scoped variable问题
interface Person2 {
  name: string;
  age: number;
  major: string;
}

let getArray = <T extends Person2, K extends keyof T>(value: T, key: K) => {
  return value[key];
};

console.log(getArray({ name: "xiaoxiao", age: 19, major: "cs" }, "age"));
