<template>
  <div>
    <fullpage-player
      :audioTotalTime="this.audioTotalTime"
      :currentTime="currentTime"
    ></fullpage-player>
    <mini-player></mini-player>
    <list-player></list-player>
    <audio
      :src="currentSong.url"
      ref="musicPlay"
      autoplay="autoplay"
      @timeupdate="timeupdate"
      @ended="endPlay"
    ></audio>
  </div>
</template>

<script>
import FullpagePlayer from "../components/player/FullpagePlayer.vue";
import MiniPlayer from "../components/player/MiniPlayer.vue";
import ListPlayer from "../components/player/ListPlayer.vue";
import { mapGetters, mapActions } from "vuex";
import modeType from "../store/modeType.js";

export default {
  name: "Player",
  components: {
    FullpagePlayer,
    MiniPlayer,
    ListPlayer,
  },
  computed: {
    ...mapGetters([
      "currentSong",
      "isPlaying",
      "currentIndex",
      "curTime",
      "modeType",
      "songs",
    ]),
  },
  data() {
    return {
      audioTotalTime: 0,
      currentTime: 0,
    };
  },
  methods: {
    ...mapActions(["setcurrentIndex"]),
    timeupdate(e) {
      this.currentTime = e.target.currentTime;
    },
    endPlay() {
      if (this.modeType === modeType.one) {
        //单曲循环
        this.$refs.musicPlay.play();
      } else if (this.modeType === modeType.loop) {
        //顺序播放
        const oldCurrentIndex = this.currentIndex;
        this.setcurrentIndex(this.currentIndex + 1);

        if (this.currentIndex === oldCurrentIndex) {
          this.$refs.musicPlay.play();
        }
      } else {
        const index = this.getRandomNumber(0, this.songs.length - 1); //随机播放
        if (index === this.currentIndex) {
          this.$refs.musicPlay.play();
        } else {
          this.setcurrentIndex(index);
        }
      }
    },
    getRandomNumber(min, max) {
      min = Math.floor(min);
      max = Math.ceil(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  watch: {
    isPlaying(newValue) {
      if (newValue) {
        this.$refs.musicPlay.play();
      } else {
        this.$refs.musicPlay.pause();
      }
    },
    currentIndex(newValue, oldValue) {
      this.$refs.musicPlay.oncanplay = () => {
        if (this.isPlaying) {
          this.$refs.musicPlay.play();
        } else {
          this.$refs.musicPlay.pause();
        }
      };
    },
    currentSong(newValue) {
      this.$refs.musicPlay.oncanplay = () => {
        this.audioTotalTime = this.$refs.musicPlay.duration;
      };
    },
    curTime(newValue) {
      this.$refs.musicPlay.currentTime = newValue;
    },
  },
  mounted() {
    this.$refs.musicPlay.oncanplay = () => {
      this.audioTotalTime = this.$refs.musicPlay.duration;
    };
  },
};
</script>

<style lang="scss" scoped></style>
