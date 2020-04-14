import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex);

const moduleA = {
	state: {
		name: 'zhangsan'
	},
	mutations: {
		updateName(state,payload){
			state.name = payload;
		}
	},
	actions: {
		aUpdateName(context){
			setTimeout(() => {
				context.commit('updateName','王五');
			}, 1000);
		}
		
	},
	getters: {
		fullname(state){
			return state.name + 'getters';
		},
		fullname2(state, getters){
			return getters.fullname + '22222222';
		},
		fullname3(state, getters, rootState){
			return getters.fullname2 + rootState.counter;
		}
	}
}

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
	mutations: {
		// 必须是同步方法
		increment(state){ // 这里的state就是我们的state对象
			state.counter++;		
		},
		decrement(state){
			state.counter--;
		},
		incrementCount(state, count){
			state.counter *= count;
		},
		addStudent(state, stu){
			state.students.push(stu);
		},		
		updateInfo(state,payload){
			/*
			 * 把异步操作写在这里面，界面中更新了，但是在Vue.state里面没有更新； 所以我们不能在mutations里面写异步操作 错误代码
			 * setTimeout(() => { Vue.set(state.info, 'address', 'CN Shanghai');
			 * //Vue.delete(state.info, 'address');是响应式的 Vue.delete(state.info,
			 * 'age'); }, 1000);
			 */
		 Vue.set(state.info, 'address', 'CN Shanghai');	// Vue.delete(state.info,
																										// 'address');是响应式的
		 Vue.delete(state.info, 'age');
		 console.log(payload,'payload');
		}
	},
	actions: {
		aUpdateInfo(context,payload){
			setTimeout(() => {
				context.commit('updateInfo',payload);
			}, 1000);
			
		}
	},
	getters:{
		getPowerCounter(state){
			return state.counter * state.counter;
		},
		more20years(state){
			return state.students.filter( s => s.age >20);
		},
		more20yearsLen(state, getters){
			return getters.more20years.length;
		},
		filterAgeYouWanna(state){
			return function(age){
				return state.students.filter(s => s.age > age);
			}
		}
	
	},
	modules: {
		aMoudle: moduleA
	}
});

// 3. 到处对象
export default store;
