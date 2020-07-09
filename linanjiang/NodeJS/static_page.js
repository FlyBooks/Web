const http = require("http");
const path = require("path");
const fs = require("fs");

let server = http.createServer();

server.on("request", function (req, res) {
  if (req.url.startsWith("/index")) {
    // let currentPath = path.join(__dirname, "www", "index.html");
    getContent(req,res);
  } else if (req.url.startsWith("/login")) {
    //let currentPath = path.join(__dirname, "www", "login.html");
    getContent(req,res);
  } else {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("没有数据");
  }
});

function getContent(req,res) {
  let currentPath = path.join(__dirname, "www", req.url);
  fs.readFile(currentPath, "utf8", function (error, data) {
    if (error) {
      res.end("Server Error");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8",
      });
      res.end(data);
    }
  });
}

server.listen(8080);
