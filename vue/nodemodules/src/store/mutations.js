export default {
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

}