<template>
  <v-app class="grey lighten--4">
    <nav-bar></nav-bar>

    <v-content class="mx-4">
      <router-view></router-view>
      <a @click="jumpAbout()">Home</a>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    jumpAbout() {
      this.$router.replace({
        path: "/about"
      });
    }
  },
  components: {
    NavBar
  }
};
</script>
