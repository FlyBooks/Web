const fs = require("fs");
const path = require("path");  

//获取文件路径
let pathName = path.join(__dirname,'node.txt');
console.log(pathName);

//读取文件
fs.readFile(pathName, function(error, data){
  if(error){
    throw new Error("文件读取失败");
  }

  console.log(data.toString());
});

fs.readFile(pathName,'utf8', function(error,data){
  if(error){
    throw new Error("文件读取失败");
  }

  console.log(data);
});

const fileContent = fs.readFileSync(pathName,'utf8');
console.log(fileContent,'sync'); //同步读取文件内容

