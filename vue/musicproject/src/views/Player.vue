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
    ></audio>
  </div>
</template>

<script>
import FullpagePlayer from "../components/player/FullpagePlayer.vue";
import MiniPlayer from "../components/player/MiniPlayer.vue";
import ListPlayer from "../components/player/ListPlayer.vue";
import { mapGetters } from "vuex";

export default {
  name: "Player",
  components: {
    FullpagePlayer,
    MiniPlayer,
    ListPlayer,
  },
  computed: {
    ...mapGetters(["currentSong", "isPlaying", "currentIndex"]),
  },
  data() {
    return {
      audioTotalTime: 0,
      currentTime: 0,
    };
  },
  methods: {
    timeupdate(e) {
      this.currentTime = e.target.currentTime;
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
    currentIndex(newValue) {
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
  },
  mounted() {
    this.$refs.musicPlay.oncanplay = () => {
      this.audioTotalTime = this.$refs.musicPlay.duration;
    };
  },
};
</script>

<style lang="scss" scoped></style>
