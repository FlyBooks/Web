<template>
  <div class="tabbar">
    <router-link to="/recommend" tag="div" class="tabitem">
      <span>推荐</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tabitem">
      <span>歌手</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tabitem">
      <span> 排行</span>
    </router-link>
    <router-link to="/search" tag="div" class="tabitem">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped lang="scss">
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";
.tabbar {
  height: 84px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  @include bg_sub_color();
  .tabitem {
    @include text_color();
    span {
      line-height: 84px;
      @include font_size($font_medium);
    }

    &.router-link-active {
      @include text_active_color();

      border-bottom-width: 5px;
      border-bottom-style: solid;
      @include border_bottom_color();
    }
  }
}
</style>
