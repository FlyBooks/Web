import Vue from 'vue'
import Vuex from 'vuex'

//1. 安装插件
Vue.use(Vuex);

//2. 创建对象
const store = Vuex.store({
	state: {
		counter: 1000
	},
	mutations: {
		
	}
});

//3. 到处对象
export default store;
