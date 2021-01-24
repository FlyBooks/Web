const { Sequelize } = require("sequelize");
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

(async () => {
  const User = sequelize.define("user", {
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

  //method 1:创建一条记录
  // const user = new User();

  // user.name = "Eva";
  // user.gender = "female";
  // user.age = 18;
  // await user.save();

  //method 2：使用create方法创建一条记录
  //create方法中包含了创建对象+调用save()
  let u = User.create({
    name: "Taylor",
    age: 19,
    gender: "female",
  });
  console.log(u);
})();
