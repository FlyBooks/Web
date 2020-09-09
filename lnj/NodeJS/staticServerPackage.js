const fs = require("fs");
const path = require("path");
const mine = require("./mime.json");

function readFile(req, res, rootPath) {
  let filePath = path.join(rootPath, req.url);
  console.log(rootPath);
  /*
  1. 加载其他资源不能写UTF-8
  2. 如果服务器在响应数据的时候没有指定响应头，那么在浏览器上，响应的数据可能没法显示
  */

  let extName = path.extname(filePath);
  let type = mine[extName];

  if (type && type.startsWith("text")) {
    type += ";charset=utf8;";
  }

  res.writeHead(200, {
    "Content-Type": type,
  });

  fs.readFile(filePath, function (error, data) {
    if (error) {
      res.end("Server Error");
    }
    res.end(data);
  });
}

exports.StaticServer = readFile;
