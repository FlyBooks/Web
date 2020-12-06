<template>
  <div class="list-player" v-show="isShowListPlayer">
    <div class="wrapper">
      <div class="list-top">
        <div class="play-mode">
          <div class="mode-img loop" @click="changeMode()" ref="mode"></div>
          <p v-if="this.modeType === 0">顺序播放</p>
          <p v-if="this.modeType === 1">单曲循环</p>
          <p v-if="this.modeType === 2">随机播放</p>
        </div>
        <div class="del" @click="delAllSong()"></div>
      </div>
      <div class="list-middle">
        <scroll-view ref="scrollview">
          <ul>
            <li class="item" v-for="(value, index) in songs" :key="value.id">
              <div class="item-left">
                <div class="play-img" @click="play()"></div>
                <p>{{ value.name }}</p>
              </div>
              <div class="item-right">
                <div class="fav"></div>
                <div class="del" @click="delSong(index)"></div>
              </div>
            </li>
          </ul>
        </scroll-view>
      </div>
      <div class="list-bottom">
        <p @click="hidePlayer()">关闭</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollView from "../ScrollView";
import { mapActions, mapGetters } from "vuex";
import modeType from "../../store/modeType.js";

export default {
  name: "ListPlayer",
  components: {
    ScrollView,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    ...mapActions([
      "setIsPlaying",
      "setModeType",
      "setIsShowListPlayer",
      "setIsMiniPlayer",
      "delSongs",
    ]),
    hidePlayer() {
      this.setIsShowListPlayer(false);
      this.setIsMiniPlayer(true);
    },
    play() {
      this.setIsPlaying(!this.isPlaying);
    },
    changeMode() {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one);
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random);
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop);
      }
    },
    delSong(index) {
      this.delSongs(index);
    },
    delAllSong() {
      this.delSong();
    },
  },
  computed: {
    ...mapGetters(["isPlaying", "modeType", "isShowListPlayer", "songs"]),
  },
  watch: {
    // isPlaying(newValue) {
    //   console.log(this.$refs.play, "play");
    // if (newValue) {
    //   this.$refs.play.classList.remove("active");
    // } else {
    //   this.$refs.play.classList.add("active");
    // }
    // },
    modeType(newValue) {
      if (newValue === modeType.loop) {
        console.log(this.$refs.mode, "mode");
        this.$refs.mode.classList.remove("random");
        this.$refs.mode.classList.add("loop");
      } else if (newValue === modeType.one) {
        this.$refs.mode.classList.remove("loop");
        this.$refs.mode.classList.add("one");
      } else if (newValue === modeType.random) {
        this.$refs.mode.classList.remove("one");
        this.$refs.mode.classList.add("random");
      }
    },
    isShowListPlayer(newValue) {
      if (newValue) {
        this.$refs.scrollview.refresh();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";

.list-player {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  @include bg_sub_color();
  .wrapper {
    .list-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .play-mode {
        display: flex;
        align-items: center;
        padding-left: 10px;
        .mode-img {
          width: 56px;
          height: 56px;
          &.loop {
            @include bg_img("../../assets/images/small_loop");
          }
          &.one {
            @include bg_img("../../assets/images/small_one");
          }
          &.random {
            @include bg_img("../../assets/images/small_shuffle");
          }
        }
        p {
          @include font_size($font_samll);
          @include text_color();
          margin-left: 10px;
        }
      }
      .del {
        width: 84px;
        height: 84px;
        @include bg_img("../../assets/images/small_del");
      }
    }
    .list-middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 700px;
      overflow: hidden;
      .item {
        border-top: 1px solid #cccccc;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .item-left {
          display: flex;
          align-items: center;

          .play-img {
            width: 56px;
            height: 56px;
            @include bg_img("../../assets/images/small_pause");
            &.active {
              @include bg_img("../../assets/images/small_play");
            }
          }
          p {
            margin-left: 10px;
            @include font_size($font_samll);
            @include text_color();
          }
        }
        .item-right {
          display: flex;
          .fav {
            width: 52px;
            height: 52px;
            @include bg_img("../../assets/images/small_un_favorite");
          }
          .del {
            width: 50px;
            height: 50px;
            @include bg_img("../../assets/images/small_close");
            margin-left: 20px;
          }
        }
      }
    }
    .list-bottom {
      height: 100px;
      line-height: 100px;
      p {
        text-align: center;
        @include bg_color();
        @include font_size($font_medium);
        color: white;
      }
    }
  }
}
</style>
