export default {
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
	
};