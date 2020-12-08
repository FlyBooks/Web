<template>
  <div class="play-bottom">
    <div class="bottom-process">
      <span>{{ showTime(currentTime) }}</span>
      <div class="process-bar">
        <div class="process-line">
          <div class="process-dot"></div>
        </div>
      </div>
      <span>{{ showTime(audioTotalTime) }}</span>
    </div>
    <div class="bottom-control">
      <div class="mode loop" ref="mode" @click="changeMode"></div>
      <div class="prev" @click="previousOne()"></div>
      <div class="play" @click="changePlayState()" ref="playLabel"></div>
      <div class="next" @click="nextOne()"></div>
      <div class="fav"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import modeType from "../../store/modeType.js";

export default {
  name: "PlayerBottom",
  props: {
    audioTotalTime: {
      type: Number,
      required: true,
      default: 0,
    },
    currentTime: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    ...mapActions(["setIsPlaying", "setModeType", "setcurrentIndex"]),
    changePlayState() {
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
    previousOne() {
      this.setcurrentIndex(this.currentIndex - 1);
    },
    nextOne() {
      this.setcurrentIndex(this.currentIndex + 1);
    },
    formatTime(time) {
      let minutes = parseInt(time / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      let seconds = parseInt(time - minutes * 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;

      return {
        minutes,
        seconds,
      };
    },
    showTime(time) {
      const getTime = this.formatTime(time);

      return `${getTime.minutes}:${getTime.seconds}`;
    },
  },
  computed: {
    ...mapGetters(["isPlaying", "modeType", "currentIndex"]),
  },
  watch: {
    isPlaying(newValue, oldValue) {
      if (newValue) {
        this.$refs.playLabel.classList.remove("active");
      } else {
        this.$refs.playLabel.classList.add("active");
      }
    },
    modeType(newValue) {
      if (newValue === modeType.loop) {
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
  },
  mounted() {
    this.formatTime(this.audioTotalTime);
  },
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
      &.loop {
        @include bg_img("../../assets/images/loop");
      }
      &.one {
        @include bg_img("../../assets/images/one");
      }
      &.random {
        @include bg_img("../../assets/images/shuffle");
      }
    }
    .prev {
      @include bg_img("../../assets/images/prev");
    }
    .play {
      @include bg_img("../../assets/images/pause");

      &.active {
        @include bg_img("../../assets/images/play");
      }
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
