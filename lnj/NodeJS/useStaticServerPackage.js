const http = require("http");
const path = require("path");
const ss = require('./staticServerPackage.js');

let server = http.createServer();

server.on("request", function(req, res){
  ss.StaticServer(req,res,path.join(__dirname,'www'));
});

server.listen(8080);
