const path = require("path");
const fs = require("fs");

//1.拼接读取的路径
const strPath = path.join(__dirname, "write.txt");

//2.创建一个读取流
let readStream = fs.createReadStream(strPath,{encoding:"utf8",highWaterMark:1});

//3.添加事件监听
readStream.on("open",function(){
  console.log("表示数据流和文件建立关系成功");
});

readStream.on("error",function(){
  console.log("表示数据流和文件建立关系失败");
});

readStream.on("data",function(data){
  console.log("表示通过读取流从文件中读取到的数据",data);
});

readStream.on("close",function(){
  console.log("表示数据流断开了和文件的关系，并且数据已经读取完毕了");
});




