<template>
<div>
<h1>我是首页Home</h1>
<router-link to='/home/news'>新闻</router-link>
<router-link to='/home/msg'>消息</router-link>
<router-view></router-view>
</div>
</template>

<script>
export default {
name:'Home',
data(){
 return {
   path: '/home/news' //首页中使用path属性记录离开时的路径，在beforeRouteLeave中记录
 }
},
created(){
//  document.title =  '首页';
},
destroyed(){
  console.log('home destroy');
},
activated(){
  console.log(this.path,'actived->path');
  this.$router.push(this.path).catch(err => err);
},
beforeRouteLeave(to, from, next){
  console.log(this.$route.path,'beforeRouteLeave');
  this.path = this.$route.path;
  next();
}
}

</script>

<style scoped>
</style>