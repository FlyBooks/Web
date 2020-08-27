<template>
  <div>
    <fullpage-player></fullpage-player>
    <mini-player @showlistplayer="showListPlayer()"></mini-player>
    <list-player ref="listPlayer"></list-player>
  </div>
</template>

<script>
import FullpagePlayer from "../components/player/FullpagePlayer.vue";
import MiniPlayer from "../components/player/MiniPlayer.vue";
import ListPlayer from "../components/player/ListPlayer.vue";

export default {
  name: "Player",
  components: {
    FullpagePlayer,
    MiniPlayer,
    ListPlayer,
  },
  methods: {
    showListPlayer() {
      this.$refs.listPlayer.showPlayer();
    },
  },
};
</script>

<style lang="scss" scoped></style>
