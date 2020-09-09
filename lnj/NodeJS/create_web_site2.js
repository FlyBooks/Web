const http = require("http");

//用链式编程的方式来搭建一个web服务器
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain;charset=utf-8",
    });
    console.log(req.url);
    if (req.url.startsWith("/index")) {
      //注意点：如果通过end方法来返回数据，那么只会返回一次
      // res.end("首页1");
      // res.end("首页2");

      //通过write方法来返回数据，那么可以返回多次
      //write方法不具备结束本次请求的功能，所以还需要手动的调用end方法来结束本次请求
      res.write("page1");
      res.write("page2");
      res.end("hahha");
    } else if (req.url.startsWith("/login")) {
      res.end("登录");
    } else {
      res.end("一定可以的");
    }
  })
  .listen(8080);

//request对象其实是http.IncomingMessage类的实例
//response对象其实是http.ServerResponse类的实例
