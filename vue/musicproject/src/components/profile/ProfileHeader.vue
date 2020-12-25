<template>
  <div class="header" @click="changeTheme">
    <div class="headerleft" @click.stop="back"></div>
    <div class="headermiddle">
      <ul>
        <li :class="{ active: switchNum === 0 }" @click.stop="setSwitchNum(0)">
          我喜欢的
        </li>
        <li :class="{ active: switchNum === 1 }" @click.stop="setSwitchNum(1)">
          最近听的
        </li>
      </ul>
    </div>
    <div class="headerright"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProfileHeader",
  data() {
    return {
      switchNum: 0,
    };
  },
  computed: {
    ...mapGetters(["themes", "themeIndex"]),
  },
  methods: {
    ...mapActions(["setthemeIndex"]),
    changeTheme() {
      this.setthemeIndex(this.themeIndex + 1);

      document.documentElement.setAttribute("theme-data", this.themes);
    },
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
      /* margin: 0 10px; */
      padding: 0 20px;
      flex: 1;
      &.active {
        background-color: lightpink;
      }
      /* &:nth-of-type(1) {
        border-right: 1px solid #ffffff;
      } */
    }
  }
}
</style>
