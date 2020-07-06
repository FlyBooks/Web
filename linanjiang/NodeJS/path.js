let path = require("path");
const { fstat } = require("fs");

//basename用于获取路径的最后一个组成部分
let res = path.basename("/a/b/c/d/index.html");
console.log(res);

let res1 = path.basename("/a/b/c/d/index", ".html");
console.log(res1);

//dirname用于获取路径中的目录，也就是除了最后一个之外的内容
let res2 = path.dirname("/a/b/c/d/index.html");
console.log(res2); //  /a/b/c/d

//extname获取扩展名
let res3 = path.extname("/a/b/c/d/index.html");
console.log(res3, "path.extname"); //.html

//isAbsolute判断是否是绝对路径
//注意点：
// 区分操作系统，在linux系统中/开头就是绝对路径；在windows操作系统中，以盘符开头就是绝对路径
// 在linux操作系统中，路径的分隔符是斜杠/； 在windows操作系统中，路径的分隔符是反斜杠\
console.log(path.isAbsolute("/a/b/c/d/index.html"), "path.isAbsolute");

//path.sep用于获取当前系统的路径分隔符
console.log(path.sep, "当前系统路径的分隔符");

// path.parse(path) 用于将路径转换成对象
let pathObj = path.parse("/a/b/c/d/index.html");
console.log(pathObj);
// {
//   root: '/',
//   dir: '/a/b/c/d',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }

// path.format用于将对象转换为字符串
let strPath = path.format(pathObj);
console.log(strPath); // /a/b/c/d\index.html

//path.normalize(path)用于规范我们的路径
let normalizePath = path.normalize("/a//b///c//d/index.html");
console.log(normalizePath); // \a\b\c\d\index.html

console.log(__filename, "filename");

let fs = require("fs");
fs.stat(__filename, function (error, status) {
  console.log(status);
  if(status.isFile()){
    console.log("当前路径对应的是一个文件")
  }else if(state.isDirectory()){
    console.log("当前路径对应的是一个文件夹");
  }
});

let check = fs.statSync(__filename);
console.log(check);
