export default {
	aUpdateInfo(context,payload){
		setTimeout(() => {
			context.commit('updateInfo',payload);
		}, 1000);
		
	}
}