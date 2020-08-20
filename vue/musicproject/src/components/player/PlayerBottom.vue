<template>
  <div class="play-bottom">
    <div class="bottom-process">
      <span>00::00</span>
      <div class="process-bar">
        <div class="process-line">
          <div class="process-dot"></div>
        </div>
      </div>
      <span>00:00</span>
    </div>
    <div class="bottom-control">
      <div class="mode"></div>
      <div class="prev"></div>
      <div class="play"></div>
      <div class="next"></div>
      <div class="fav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerBottom",
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";
.play-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .bottom-process {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    width: 80%;
    span {
      @include font_size($font_samll);
      @include text_color();
    }
    .process-bar {
      width: 80%;
      margin: 0 10px;
      background-color: white;
      height: 10px;
      border-radius: 2px;
      .process-line {
        width: 50%;
        height: 100%;
        position: relative;
        background-color: #ccc;
        .process-dot {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: yellowgreen;
        }
      }
    }
  }
  .bottom-control {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 0;
    div {
      width: 84px;
      height: 84px;
    }
    .mode {
      @include bg_img("../../assets/images/loop");
    }
    .prev {
      @include bg_img("../../assets/images/prev");
    }
    .play {
      @include bg_img("../../assets/images/play");
    }
    .next {
      @include bg_img("../../assets/images/next");
    }
    .fav {
      @include bg_img("../../assets/images/un_favorite");
    }
  }
}
</style>
