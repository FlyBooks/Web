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

  //查询对象
  let user = await User.findByPk(1);

  //更新对象
  // user.name = 'happy';
  // await user.save();

  //更新对象2
  // User.update(
  //   {
  //     name: "daydayup",
  //   },
  //   {
  //     where: {
  //       id: 2,
  //     },
  //   }
  // );

  //删除数据
  User.destroy({
    where: { id: 2 },
  });
})();
