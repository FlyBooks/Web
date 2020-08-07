<template>
  <div class="header" @click="changeTheme">
    <div class="headerleft"></div>
    <div class="headermiddle">网易云音乐</div>
    <div class="headerright"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      themes: ["color1", "color2", "color3"],
      index: 0,
    };
  },
  methods: {
    changeTheme() {
      this.index++;
      if (this.index >= this.themes.length) {
        this.index = 0;
      }
      document.documentElement.setAttribute(
        "theme-data",
        this.themes[this.index]
      );
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
  .headerright{
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
