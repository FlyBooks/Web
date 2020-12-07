<template>
  <div>
    <fullpage-player></fullpage-player>
    <mini-player></mini-player>
    <list-player></list-player>
    <audio :src="currentSong.url" ref="musicPlay"></audio>
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
  },
};
</script>

<style lang="scss" scoped></style>
