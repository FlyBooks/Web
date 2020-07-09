const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
  console.log(req.method);
  res.writeHead(200,{ "Content-Type": "text/plain;charset=utf8" });
  if (req.method.toLowerCase() === "get") {
    res.end("用get的方式来处理参数");
  } else if (req.method.toLowerCase() === "post") {
    res.end("用post的方式来处理参数");
  }
});

server.listen(3000);
