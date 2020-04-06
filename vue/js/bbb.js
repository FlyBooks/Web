//导入定义的变量
import {flag,name,age} from './aaa.js';

if(flag){
	console.log('we can use flag here');
}
console.log(age,'age');

//导入export中的function
import {sum} from './aaa.js';
console.log(sum(10,20)); //30

import {Person} from './aaa.js';
let person1 = new Person();
person1.run();//在奔跑！！！

//统一全部导入
//import * as aaa from './aaa.js'
//console.log(aaa.flag);