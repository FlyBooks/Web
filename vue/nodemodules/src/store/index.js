import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moduleA from './modules/moduleA'
// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const store = new Vuex.Store({
	state: {
		counter: 1000,
		students: [
			{id: 110, name: 'modern', age: 18},
			{id: 111, name: 'modern1', age: 19},
			{id: 112, name: 'modern1', age: 20},
			{id: 113, name: 'modern1', age: 21},
			{id: 114, name: 'modern1', age: 22}
		],
		info: {name: 'Eva', age: 18}
	},
	mutations,
	actions,
	getters,
	modules: {
		aMoudle: moduleA
	}
});

// 3. 到处对象
export default store;
