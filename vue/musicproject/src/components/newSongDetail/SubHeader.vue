<template>
  <div class="header" @click="changeTheme()">
    <div class="header-left" @click.stop="back()"></div>
    <p>{{ title }}</p>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      themes: ["color1", "color2", "color3"],
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
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";

.header {
  height: 100px;
  width: 100%;
  @include bg_color();
  display: flex;
  justify-content: space-between;
  .header-left,
  .header-right {
    width: 84px;
    height: 84px;
    line-height: 84px;
    margin-top: 8px;
  }

  .header-left {
    @include bg_img("../../assets/images/back");
  }
  .header-right {
    @include bg_img("../../assets/images/more");
  }
  p {
    text-align: center;
    line-height: 100px;
    color: #ffffff;
    font-weight: bold;
    @include no-wrap();
    @include font_size($font_medium);
  }
}
</style>
