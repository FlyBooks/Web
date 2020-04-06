<template>
  <div id="app">
  <router-view></router-view>
  <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/MainTabBar';
export default {
  name: 'App',
  components: {
   maintabbar
  }
}
</script>

<style scoped>
@import "./assets/css/base.css";


</style>
