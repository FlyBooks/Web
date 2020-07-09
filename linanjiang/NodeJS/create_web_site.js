const http = require('http');

//1.创建一个服务器实例
let server = http.createServer();

//2.注册请求监听
server.on('request',function(req, res){
  //writeHead告诉浏览器返回的数据是什么类型，返回的类型需要用什么字符集来解析
  res.writeHead(200,{
   "Content-Type":"text/plain; charset=utf-8"
  });

  //end方法的作用：结束本次请求并且返回数据
  res.end("哈哈");
});

//3.指定监听的端口
server.listen(3000);

