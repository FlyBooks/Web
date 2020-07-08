const path = require("path");
const fs = require("fs");

let readPath = path.join(__dirname, "test.mp4");
let writePath = path.join(__dirname, "abc.mp4");

let readStream = fs.createReadStream(readPath);
let writeStream = fs.createWriteStream(writePath);

//利用读取流的管道方法来快速实现文件的拷贝
readStream.pipe(writeStream);
