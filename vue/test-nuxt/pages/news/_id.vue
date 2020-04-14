<template>
  <div>
  <h1>News-content</h1>
  <P>NewsId: {{$route.params.id}}</P>
  <ul>
    <li><a href="/">HOME</a></li>
  </ul>
  </div>
</template>

<script>
  //动态路由， 参数验证； 如果没有找到就会出现404页面
  export default {
    validate({params}){
      return /^\d+$/.test(params.id);
    }
  }
</script>
