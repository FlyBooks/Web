import * as obj from './js/bbb.js';
import Vue from 'vue'; //导入vue的代码
import App from './vue/App.vue';
require ('./css/normal.css');
require ('./css/special.less');
function sum(n1,n2){
	let n3 = n1+n2;
	
	console.log(`${obj.name} is more capable than ${n3} people `);
	return n3;
}

sum(10,20);

new Vue({
	el: "#app",
	template:'<App/>',
	components:{
		App
	}
});