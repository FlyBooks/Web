let buf1 = Buffer.from("abcdefg");
let buf2 = buf1.slice(2,4);
console.log(buf2);
console.log(buf2.toString());

let res = Buffer.isEncoding("utf-8");
console.log(res);

let res2 = Buffer.isEncoding("gbk");
console.log(res2);

// isBuffer判断是否是Buffer对象
let obj = {};
console.log(Buffer.isBuffer(obj),'isBuffer');
let obj2 = Buffer.alloc(5);
console.log(Buffer.isBuffer(obj2),'isBuffer');

let buf3 = Buffer.from("1123");
console.log(buf3.length,'len');

let str1 = Buffer.from("124");
let str2 = Buffer.from("erf");
let str3 = Buffer.from("999");

console.log(Buffer.concat([str1,str2, str3]),'concat');
console.log(Buffer.concat([str1,str2, str3]).toString(),'concat');

