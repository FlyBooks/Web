<template>
<div>
<h1>我是用户界面</h1>
<p>用户{{userId}}相关信息如下：blabla</p>
<button @click="displayRouter">展示router信息</button>
</div>
</template>

<script>
export default {
name: 'User',
computed:{
  userId(){
	return this.$route.params.userId;
  }
},
methods: {
  displayRouter(){
    console.log(this.$router);
  }
}
}

</script>


<style scoped>
</style>
