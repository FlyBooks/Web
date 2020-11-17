"use strict";
let person1 = {
    id: 19,
    age: 18,
    name: "Eva",
};
// person1.id = 20; ERROR
console.log(person1);
let per2 = {
    name: "string",
    id: 20,
};
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    return x.split("").reverse().join("");
}
let obj2 = {
    firstName: "xiaoming",
    lastName: "huang",
};
let books = {
    "1": "fly",
    2: "sky",
    3: "what",
    4: "xxi",
};
console.log(books, "books");
