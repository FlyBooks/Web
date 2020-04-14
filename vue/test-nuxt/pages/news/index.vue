<template>
  <div>
    <h2>News Index pag222</h2>
    <p>{{$route.params.newsId}}</p>
    <ul>
    <li><nuxt-link to="{name:'index'}">HOME</nuxt-link></li>
    <li><nuxt-link :to="{name: 'news-id', params: {id: 123}}">news1</nuxt-link></li>
    <li><nuxt-link :to="{name: 'news-id', params: {id: 445}}">news2</nuxt-link></li>
  </ul>
  </div>
</template>


