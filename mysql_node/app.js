var mysql = require("mysql"); //导入mysql库

//进行连接的配置
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password : "root",
  database : "test",
  port:'3306'
});

//连接mysql服务器
connection.connect();

//给mysql服务器发送指令
connection.query("select * from bank", (error, results, fields)=>{
if(error){
console.log(error);
}
else{
  console.log(results);
}
});

//释放连接
connection.end();
