<template>
 <div>{{name}}
 <p>info origin: {{info.origin}}</p>
 <p>info url: {{info.url}}</p>
<div class="diss"></div>
 </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return {
        name: 'asyncData'
      };
    },
   /* asyncData(){
      return axios.get('https://httpbin.org/get')
      .then(res => {console.log(res,'axios');  return {info: res.data};});
    }*/
    async asyncData(){
      let {data}= await axios.get('https://httpbin.org/get');
      console.log(data,23333);
      return {info: data};
    }
  }
</script>

<style>
 .diss {
    width: 300px;
    height: 300px;
    background-image: url('~static/2.jpg');
 }

</style>

