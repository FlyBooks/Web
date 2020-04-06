const path = require('path'); //npm init 之后我们就可以依赖node里面的包了
module.exports = {
		entry: './src/main.js', //入口
		output: { //出口
			path: path.resolve(__dirname,'dist'), //动态获取绝对路径
			filename: 'bundle.js'
		} 
}