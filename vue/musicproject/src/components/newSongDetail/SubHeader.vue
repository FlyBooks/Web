<template>
  <common-header>
    <template v-slot:left>
      <div class="header-left" @click.stop="back()"></div>
    </template>
    <template v-slot:middle>
      <p>{{ title }}</p>
    </template>
    <template v-slot:right>
      <div class="header-right"></div>
    </template>
  </common-header>
</template>

<script>
import CommonHeader from "../common/Header";
export default {
  name: "SubHeader",
  components: {
    CommonHeader,
  },
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";

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
</style>
