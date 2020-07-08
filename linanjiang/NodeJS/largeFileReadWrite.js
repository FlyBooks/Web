const path = require("path");
const fs = require("fs");

const readFsPath = path.join(__dirname, "test.mp4");
const writtenFsPath = path.join(__dirname, "abc.mp4");

let readFs = fs.createReadStream(readFsPath);
let writeFs = fs.createWriteStream(writtenFsPath);

readFs.on("open", function () {
  console.log("文件读入流建立成功");
});

readFs.on("error",function(){
  console.log("文件读入失败");
});

readFs.on("data",function(data){
  writeFs.write(data);
  console.log("正在写入数据");
});

readFs.on("close", function(){
  writeFs.end();
  console.log("读取文件结束，关闭");
});

writeFs.on("open",function(){
  console.log("写入流与文件建立关系成功！");
});

writeFs.on("error",function(error){
  if(error){
    throw new Error(error);
  }
});

writeFs.on("close",function(){
   console.log("写入文件结束，关闭文件流");
});
