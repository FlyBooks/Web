const { Sequelize } = require("sequelize");

//sequelize连接mysql数据库
//test是数据库名称
//root用户名， root is password
const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

//authenticate用于测试是否配置正确
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("ok~~~~~");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//使用sequelize创建表
const user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.TINYINT,
    defaultValue: 20,
  },
  gender: {
    type: Sequelize.ENUM(["female", "male", "secret"]),
    defaultValue: "secret",
  },
});


//注意点：默认定义好一个模型之后并不会自动创建对应的表，
//需要调用sync方法来执行同步；这样之后才会创建模型对应的表
sequelize.sync();
