<template>
  <div class="hello">
   <h1>我是hello world{{counterhello}}</h1>
   <h1>{{$store.state.counter}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    counterhello: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
