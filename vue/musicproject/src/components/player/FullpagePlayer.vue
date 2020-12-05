<template>
  <div class="fullpage-player" v-show="this.isFullpagePlay">
    <div class="wrapper">
      <player-header></player-header>
      <player-middle></player-middle>
      <play-bottom></play-bottom>
    </div>
    <div class="bg-img">
      <img :src="currentSong.picUrl" alt="" />
    </div>
  </div>
</template>

<script>
import PlayerHeader from "./PlayerHeader.vue";
import PlayerMiddle from "./PlayerMiddle.vue";
import PlayBottom from "./PlayerBottom.vue";
import { mapGetters } from "vuex";

export default {
  name: "FullpagePlayer",
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayBottom,
  },
  computed: {
    ...mapGetters(["isFullpagePlay", "currentSong"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";
.fullpage-player {
  position: fixed;
  top: 0;
  left: 0;
  background-color: pink;
  width: 100%;
  height: 100%;
  @include bg_sub_color();
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      height: 100%;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      filter: blur(15px);
    }
  }
}
</style>
