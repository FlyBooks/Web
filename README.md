# jQuery小记
1. 释放$的使用权
注意点: 释放操作必须编写在其他jQuery代码之前，释放之后就不能使用$,改用使用jQuery
jQuery.noConflict();

2. 自定义一个访问符号
var q = jQuery.noConflict();

3. $();代表调用jQuery核心函数
可以接受一个字符串
	可以接受一个字符串选择器
	可以接受一个代码片段
可以接受一个函数