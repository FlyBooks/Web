<template>
  <div class="header" @click="changeTheme">
    <div class="headerleft">
      <slot name="left"></slot>
    </div>
    <div class="headermiddle">
      <slot name="middle"></slot>
    </div>
    <div class="headerright">
      <slot name="right"></slot>
    </div>
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
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable.scss";
@import "../../assets/css/mixin.scss";
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
    * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
