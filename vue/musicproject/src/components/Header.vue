<template>
  <!-- <div class="header" @click="changeTheme">
    
    <div class="headermiddle">Cloud Music</div>
    
  </div> -->
  <common-header>
    <template v-slot:left>
      <div class="headerleft"></div>
    </template>
    <template v-slot:middle>
      <div class="headermiddle">Cloud Music</div>
    </template>
    <template v-slot:right>
      <div class="headerright" @click.stop="showProfile()"></div>
    </template>
  </common-header>
</template>

<script>
import CommonHeader from "./common/Header.vue";
export default {
  name: "Header",
  components: {
    CommonHeader,
  },
  methods: {
    showProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";

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
</style>
