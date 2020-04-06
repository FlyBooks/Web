<template>
<div>
<h1>我是Profile组件</h1>
<p>{{$route.query}}</p>
<p>name: {{$route.query.name}}</p>
<p>age: {{$route.query.age}}</p>
</div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {

  },
  created(){
      console.log('created');
  },
  destroyed(){
      console.log('Profile destroyed');
  }
}
</script>

<style scoped></style>
