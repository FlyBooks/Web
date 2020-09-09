const path = require("path");
const fs = require("fs");

const pathStr = path.join(__dirname, "write.txt");

let writeStream = fs.createWriteStream(pathStr, { encoding: "utf8" });

writeStream.on("open", function () {
  console.log("表示数据流和文件建立关系成功！");
});

writeStream.on("error", function () {
  console.log("表示数据流和文件建立关系失败");
});

writeStream.on("close", function () {
  console.log("表示数据流断开了和文件的关系，并且数据已经读取完毕了");
});

let content = "we can fly";
let index = 0;
let timer = setInterval(() => {
  writeStream.write(content[index]);
  index++;
  if (index === content.length) {
    clearInterval(timer);
    writeStream.end();
  }
}, 1000);
