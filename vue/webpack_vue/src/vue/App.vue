<template>
<div>
	<p class="title">template与el的区别</p>
	<p>{{name}}</p>
	<input type="button" value="template" @click="btnClick()">
	<cpn></cpn>
</div>	
</template>

<script>
import cpn from './Cpn.vue';
export default {
	name:'App',
	components:{
	cpn
	},
	data(){
		return {
			msg:'template makes life easy',
			name:'Eva'
		};
	},
	methods:{
		btnClick(){
			console.log('you have clicked me!!!');
		}
	}
}

</script>

<style scoped>
.title{
	color: green;
}
</style>