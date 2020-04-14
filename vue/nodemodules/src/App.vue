<template>
  <div id="app">
    <h1>modules中的数据</h1>
    <p>{{$store.state.aMoudle.name}}</p>
    <input type="button" value="使用模块里面的mutations" @click="updateName()">   
    <p>调用moduleA里面的getter方法： {{$store.getters.fullname}}</p>
    <p>调用moduleA里面的getter方法2： {{$store.getters.fullname2}}</p>
    <p>调用moduleA里面的getter方法2： {{$store.getters.fullname3}}</p>
    <button @click="asyncClick()">调用moduleA里面的actions方法： </button>
    <h1>我是App组件</h1>
    <p>{{$store.state.counter}}</p>
    <button @click="add()">+</button>
    <button @click="subtraction()">-</button>
    
    <h1>store里面的getters</h1>
    <p>{{$store.getters.getPowerCounter}}</p>
    <p>older than 20: {{$store.getters.more20years}}</p> 
    <p>length: {{$store.getters.more20yearsLen}}</p>
    <p>age older than 21: {{$store.getters.filterAgeYouWanna(21)}}</p>
    
    <input type="button" value="add student" @click="addStudent()">
    <input type="button" value='Update Info' @click="updateInfo()">
    
    <button @click="addCount(5)">增加你想要的5倍数 </button>
    <p>{{$store.state.info}}</p>
    <hello-world :counterhello="counter1"></hello-world>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {ADD} from './store/mutations-types'
export default {
  name: 'App',
  data() {
    return {
      counter1: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
   [ADD](){
     this.$store.commit('increment');
   },
   subtraction(){
     this.$store.commit('decrement');
   },
   addCount(count){
     this.$store.commit('incrementCount',count);
     
     /*
            特殊风格： this.$store.commit({
       type: 'increment',
       count: count //之后index.js会得到的对象
      }); 
      */
   },
   addStudent(){
     let student = {id: 115, name: 'modern7775', age: 25};
     this.$store.commit('addStudent', student);
   },
   updateInfo(){
     //this.$store.commit('updateInfo'); //同步更新
     this.$store.dispatch('aUpdateInfo','我是payload');
   },
   updateName(){
     this.$store.commit('updateName', 'lisi');
   },
   asyncClick(){
     this.$store.dispatch('aUpdateName');
   }
  },
  computed: {
    more20stu(){
    console.log(this.$store.state.students);
      return this.$store.state.students.filter((s) =>{
        return s.age > 20;
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
</style>
