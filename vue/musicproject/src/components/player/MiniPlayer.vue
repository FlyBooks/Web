<template>
  <div class="mini-player" v-show="this.isMiniPlayer">
    <div class="player-left" @click="showFullpagePlayer()">
      <div class="wrap-img" ref="img">
        <img :src="currentSong.picUrl" alt="" />
      </div>
      <div class="song-info">
        <h3>{{ currentSong.name }}</h3>
        <p>{{ currentSong.artist }}</p>
      </div>
    </div>
    <div class="player-right">
      <div class="play" @click="changePlay" ref="playMusic"></div>
      <div class="list" @click="showListPlayer"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "MiniPlayer",
  computed: {
    ...mapState(["isMiniPlayer", "isPlaying"]),
    ...mapGetters(["currentSong"]),
  },
  methods: {
    ...mapActions([
      "setIsFullpagePlay",
      "setIsMiniPlayer",
      "setIsPlaying",
      "setIsShowListPlayer",
    ]),
    showListPlayer() {
      this.setIsShowListPlayer(true);
    },
    showFullpagePlayer() {
      this.setIsFullpagePlay(true);
    },
    changePlay() {
      this.setIsPlaying(!this.isPlaying);
    },
  },
  watch: {
    isPlaying(newValue, oldValue) {
      if (newValue) {
        this.$refs.playMusic.classList.remove("active");
        this.$refs.img.classList.remove("inactive");
      } else {
        this.$refs.playMusic.classList.add("active");
        this.$refs.img.classList.add("inactive");
      }
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
    .wrap-img {
      animation: sport 3s linear infinite;
      animation-play-state: running;
      &.inactive {
        animation-play-state: paused;
      }
      img {
        width: 84px;
        height: 84px;
        border-radius: 50%;
      }
    }

    .song-info {
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      /* width: 50%; */
      margin-left: 10px;
      h3 {
        @include font_size($font_medium);
        /* @include no-wrap(); */
        color: white;
      }
      p {
        margin-top: 5px;
        @include font_size($font_samll);
        @include text_color();
        /* @include no-wrap(); */
      }
    }
  }

  .player-right {
    display: flex;
    align-items: center;
    .play {
      @include bg_img("../../assets/images/pause");
      width: 70px;
      height: 70px;
      &.active {
        @include bg_img("../../assets/images/play");
      }
    }
    .list {
      @include bg_img("../../assets/images/list");
      width: 100px;
      height: 100px;
      /* margin-right: 10px; */
    }
  }
}

@keyframes sport {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
