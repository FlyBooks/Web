<template>
  <div>
    <fullpage-player></fullpage-player>
    <mini-player></mini-player>
    <list-player ref="listPlayer"></list-player>
    <audio :src="currentSong.url"></audio>
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
    ...mapGetters(["currentSong"]),
  },
};
</script>

<style lang="scss" scoped></style>
