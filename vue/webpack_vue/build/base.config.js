const path = require('path'); //npm init 之后我们就可以依赖node里面的包了
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
		entry: './src/main.js', //入口
		output: { //出口
			path: path.resolve(__dirname,'../dist'), //动态获取绝对路径
			filename: 'bundle.js',
			//publicPath: "dist/"
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader','css-loader']
				},
				{
					test: /\.less$/,
					use:[
						{loader: "style-loader"},
						{loader: "css-loader"},
						{loader: "less-loader"}
					]
				},
				{
					test: /\.(pgn|jpg|gif|jpeg)$/,
					use : [ {
							loader : 'url-loader',
							options : {
								limit : 100000,
								name : 'img/[name]_[hash:8].[ext]'
							}
					} ]
				},
				{
					test:/\.vue$/,
					use:['vue-loader']
				}
			]
		},
		resolve:{
			alias:{
				'vue$': 'vue/dist/vue.esm.js'
			}
		},
		plugins: [
			new webpack.BannerPlugin('最终版权归Vue所有'), 
			new HtmlWebpackPlugin({template:'index.html'})
		]
}
