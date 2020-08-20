<template>
  <div class="player">
    <player-header></player-header>
    <player-middle></player-middle>
    <play-bottom></play-bottom>
  </div>
</template>

<script>
import PlayerHeader from "../components/player/PlayerHeader.vue";
import PlayerMiddle from "../components/player/PlayerMiddle.vue";
import PlayBottom from "../components/player/PlayerBottom.vue";

export default {
  name: "Player",
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayBottom,
  },
};
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  top: 0;
  left: 0;
  background-color: pink;
  width: 100%;
  height: 100%;
}
</style>
