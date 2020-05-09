<template>
<div>
<nav-bar><div slot="left">YES</div></nav-bar>
<h1>我是购物车</h1>
<p>store: {{$store.state.counter}}</p>
<p>counter power: {{$store.getters.powerCounter}}</p>
<p>{{more20Stu}}</p>
<p>getter: {{$store.getters.stuMore20}}</p>
<p>len: {{$store.getters.stuMore20Len}}</p>
<p>DIY AGE: {{$store.getters.stuFilterByUser(16)}}</p>
<p>store: {{$store.state.a.www}}</p>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
export default {
  name: "Cart",
  components: {
  NavBar
  },
  computed:{
    more20Stu(){
      let stus = this.$store.state.students;
      return stus.filter((stu)=>{
        return stu.age > 19;
      });
    }
  }
}
</script>

<style scoped>
</style>