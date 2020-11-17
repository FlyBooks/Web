"use strict";
// function getName(name: string): string {
//   return name;
// }
let Person = function (name, major) {
    return `${name}'s major is ${major}`;
};
function sumSome(x, y, z) {
    return x + y + (z ? z : 0);
}
console.log(sumSome(1, 2, 3));
function GetArray(value) {
    let arr = [];
    if (typeof value === "number") {
        for (let i = 0; i < value; i++) {
            arr.push(i);
        }
    }
    else {
        arr = value.split("");
    }
    return arr;
}
console.log(GetArray(10));
console.log(GetArray("hello,ts"));
