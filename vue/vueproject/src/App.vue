<template>
  <div id="app">
  <!-- <router-link to="/home" tag="button">首页</router-link>  -->
  <!--<router-link to="/about" tag="button">关于</router-link>  -->
 	
 	<!--<input type="button" @click="btnClick2()" value="关于">-->
    <!--<input type="button" @click="btnClick1()" value="首页">-->
    
    <router-link to="/home">首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-link v-bind:to="'/user/'+userid">用户</router-link>
    <!-- <router-link v-bind:to="{path: '/profile',query: {name: 'Eva', age: 18, height: 1.68}}">档案</router-link> -->
    <button @click="showProfile()"> 档案 </button>
   <keep-alive exclude="Profile"><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userid: "zhangsan"
    }
  },
  methods: {
    showProfile(){
      this.$router.push({
      path: '/profile',
      query: {
         name: 'Eva',
         age: '18',
         height: 1.68	
       }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: #f00;
}
</style>
