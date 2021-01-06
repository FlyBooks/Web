<template>
  <common-header>
    <template v-slot:left>
      <div class="headerleft" @click.stop="back"></div>
    </template>
    <template v-slot:middle>
      <div class="headermiddle">
        <ul>
          <li
            :class="{ active: switchNum === 0 }"
            @click.stop="setSwitchNum(0)"
          >
            我喜欢的
          </li>
          <li
            :class="{ active: switchNum === 1 }"
            @click.stop="setSwitchNum(1)"
          >
            最近听的
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:right>
      <div class="headerright"></div>
    </template>
  </common-header>
</template>

<script>
import CommonHeader from "../common/Header.vue";
export default {
  name: "ProfileHeader",
  components: {
    CommonHeader,
  },
  data() {
    return {
      switchNum: 0,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    setSwitchNum(num) {
      this.$emit("profileindex", num);
      this.switchNum = num;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";

.headerleft {
  @include bg_img("../../assets/images/back");
}
.headerright {
  @include bg_img("../../assets/images/more");
}
.headermiddle {
  text-align: center;
  line-height: 100px;
  /* background: yellow; */
  @include font_size($font_medium);
  color: #fff;
  ul {
    display: flex;
    border: 1px solid #fff;
    border-radius: 15px;
    height: 60px;
    margin: 20px 20px;
    line-height: 60px;
    overflow: hidden;
  }

  ul > li {
    padding: 0 20px;
    flex: 1;
    &.active {
      background-color: lightpink;
    }
  }
}
</style>
