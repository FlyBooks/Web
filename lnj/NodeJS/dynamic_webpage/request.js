let http = require("http");
let path = require("path");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");

const server = http.createServer();
const people = {
  lisi: {
    name: "lisi",
    age: 87,
    gender: "male",
  },
  wangwu: {
    name: "wangwu",
    age: 77,
    gender: "male",
  },
};

server.on("request", function (req, res) {
  if (req.url.startsWith("/index") && req.method.toLowerCase() === "get") {
    let obj = url.parse(req.url);
    let filePath = path.join(__dirname, obj.pathname);
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/plain;charset=utf-8;",
        });
        res.end("页面丢失了");
      }

      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8;",
      });
      res.end(data);
    });
  } else if (
    req.url.startsWith("/info") &&
    req.method.toLowerCase() === "post"
  ) {
    let params = "";
    req.on("data", function (chunk) {
      params += chunk;
    });
    req.on("end", function () {
      let objParams = queryString.parse(params); //把userName=666转换成对象
      let selInfo = people[objParams.userName];

      let infoPath = path.join(__dirname, "info.html");
      fs.readFile(infoPath, "utf-8", function (err, content) {
        if (err) {
          res.writeHead(404, {
            "Content-Type": "text/html;charset=utf-8",
          });
        } else {
          content = content.replace("blabal1",selInfo.name);
          content = content.replace("blabal2",selInfo.age);
          content = content.replace("blabal3",selInfo.gender);
          res.end(content);
        }
      });
    });
  }
});
server.listen(3000);
