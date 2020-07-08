const fs = require("fs");
const path = require("path");

// 1.拼接写入的路径
let strPath = path.join(__dirname, "write.txt");

// 写入数据
// let buff = Buffer.from("node++++");
// fs.writeFile(strPath,buff,'utf-8',function(err){
//    if (err){
//     throw new Error(err);
//    }
//    else{
//      console.log("写入数据成功！");
//    }
// });

let res = fs.writeFileSync(strPath, "node ._<", "utf-8");
if (res) {
  throw new Error(res);
}

//追加数据
fs.appendFile(strPath, "plus plus", "utf-8", function (err) {
  if (err) {
    throw new Error(err);
  }
});




