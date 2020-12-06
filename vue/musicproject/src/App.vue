<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tabbar from "./components/Tabbar.vue";
import Player from "./views/Player.vue";

export default {
  name: "App",
  components: {
    Header,
    Tabbar,
    Player,
  },
  methods: {
    // changeThemeColor(data) {
    //   document.documentElement.setAttribute("theme-data", data);
    // },
  },
};
</script>

<style scoped lang="scss">
@import "./assets/css/variable.scss";
@import "./assets/css/mixin.scss";

/* .theme {
  position: fixed;
  left: 0;
  bottom: 0;
  button {
    bottom: 0;
    width: 50px;
    height: 50px;

    &:nth-of-type(1) {
      background-color: $background-color-theme;
    }
    &:nth-of-type(2) {
      background-color: $background-color-theme1;
    }
    &:nth-of-type(3) {
      background-color: $background-color-theme2;
    }
  }
} */
</style>
