<template>
  <div id="app">
    <h1>我是App组件</h1>
    <p>{{counter}}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    
    <hello-world :counterhello="counter"></hello-world>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {
      counter: 0
    }
  },
  components: {
    HelloWorld
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
