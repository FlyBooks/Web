"use strict";
//由于TS并不是一门新的语言，而是对JS的扩展，所以可以在TS文件中直接编写JS代码
//TS支持类型注解，我们可以通过类型注解来告诉系统，变量中将来只能存储什么类型的数据
let val;
val = 999;
function sum(a, b) {
    return a.length + b;
}
console.log(sum([1, 2, 3], 99));
let flag;
flag = true;
console.log(flag, "flag");
let name1;
name1 = "Eva";
console.log(name, "name");
