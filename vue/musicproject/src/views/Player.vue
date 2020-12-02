<template>
  <div>
    <fullpage-player></fullpage-player>
    <mini-player></mini-player>
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
};
</script>

<style lang="scss" scoped></style>
