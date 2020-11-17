"use strict";
let createArray = function (value, size = 5) {
    return new Array(size).fill(value);
};
let res = createArray("666", 9);
let res2 = res.map((value) => {
    return value.length;
});
console.log(res2);
let getArray = (value, size) => {
    return new Array(size).fill(value);
};
console.log(getArray(999, 2));
let getArray2 = (val, len) => {
    return new Array(len).fill(val);
};
getArray2('hhh', 4);
/*
在泛型中使用类型参数：
一个泛型被另一个泛型约束，就叫做泛型约束中使用类型参数；
*/ 
