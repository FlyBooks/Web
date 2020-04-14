export default {
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