<template>
  <div class="mini-player" v-show="this.isMiniPlayer">
    <div class="player-left" @click="showFullpagePlayer()">
      <img
        src="http://p3.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg"
        alt=""
      />
      <div class="song-info">
        <h3>演员</h3>
        <p>薛之谦</p>
      </div>
    </div>
    <div class="player-right">
      <div class="play"></div>
      <div class="list" @click="showListPlayer"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "MiniPlayer",
  computed: {
    ...mapState(["isMiniPlayer"]),
  },
  methods: {
    ...mapActions(["setIsFullpagePlay", "setIsMiniPlayer"]),
    showListPlayer() {
      this.$emit("showlistplayer");
    },
    showFullpagePlayer() {
      this.setIsFullpagePlay(true);
      this.setIsMiniPlayer(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";
.mini-player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include bg_color();
  .player-left {
    display: flex;
    padding: 0px 20px;
    img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
    }
    .song-info {
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      margin-left: 10px;
      h3 {
        @include font_size($font_medium);
        color: white;
      }
      p {
        margin-top: 5px;
        @include font_size($font_samll);
        @include text_color();
      }
    }
  }

  .player-right {
    display: flex;
    align-items: center;
    .play {
      @include bg_img("../../assets/images/play");
      width: 70px;
      height: 70px;
    }
    .list {
      @include bg_img("../../assets/images/list");
      width: 100px;
      height: 100px;
    }
  }
}
</style>
