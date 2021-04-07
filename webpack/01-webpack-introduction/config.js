const path = require("path");
module.exports = {
  mode: "production", //"production" | "development" | "none"
  entry: "./index.js", //指定需要打包的文件
  output: {
    //指定打包之后的文件输出的路径和输出的文件名称
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle"),
    
  },
};
