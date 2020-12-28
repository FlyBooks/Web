<template>
  <div class="header" @click="changeTheme">
    <div class="headerleft"></div>
    <div class="headermiddle">Cloud Music</div>
    <div class="headerright" @click.stop="showProfile()"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["themeIndex", "themes"]),
  },
  methods: {
    ...mapActions(["setthemeIndex"]),
    changeTheme() {
      this.setthemeIndex(this.themeIndex + 1);
      document.documentElement.setAttribute("theme-data", this.themes);
    },
    showProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";
.header {
  height: 100px;
  width: 100%;
  @include bg_color();
  display: flex;
  justify-content: space-between;
  .headerleft,
  .headerright {
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .headerleft {
    @include bg_img("../assets/images/logo");
  }
  .headerright {
    @include bg_img("../assets/images/account");
  }
  .headermiddle {
    text-align: center;
    line-height: 100px;
    @include font_size($font_medium);
    color: #fff;
  }
}
</style>
