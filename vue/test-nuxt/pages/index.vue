<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news', params:{newsId: 999}}">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{name: 'asyncData'}">asyncDate</nuxt-link></li>
      <li><nuxt-link :to="{name: 'vcard'}">vcard</nuxt-link></li>
    </ul>
   </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
