<template>
  <div class="player-header">
    <div class="left" @click="hiddleFullpagePlayer()"></div>
    <div class="middle">
      <h3>演员</h3>
      <p>薛之谦</p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PlayerHeader",
  methods: {
    ...mapActions(["setIsFullpagePlay", "setIsMiniPlayer"]),
    hiddleFullpagePlayer() {
      this.setIsFullpagePlay(false);
      this.setIsMiniPlayer(true);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";
.player-header {
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  .left,
  .right {
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .left {
    @include bg_img("../../assets/images/down");
  }

  .middle {
    display: flex;
    justify-content: cneter;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    @include font_size($font_medium);
    @include no-wrap();
  }
}
</style>
