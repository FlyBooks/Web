"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let getArray = (value, key) => {
    return value[key];
};
console.log(getArray({ name: "xiaoxiao", age: 19, major: "cs" }, "age"));
