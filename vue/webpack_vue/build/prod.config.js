const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig2 = require('./base.config.js');

module.exports =webpackMerge(baseConfig2, {
	plugins: [ new UglifyjsWebpackPlugin() ]
});
