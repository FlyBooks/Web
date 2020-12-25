<template>
  <div class="song">
    <div class="song-top">
      <h3>最新音乐</h3>
    </div>
    <new-song-list :newsong="newsong"></new-song-list>
  </div>
</template>

<script>
import NewSongList from "../NewSongList.vue";
export default {
  name: "NewSong",
  components: {
    NewSongList,
  },
  props: {
    newsong: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable.scss";
@import "../../assets/css/mixin.scss";

.song {
  @include bg_sub_color();
  .song-top {
    h3 {
      width: 100%;
      height: 84px;
      line-height: 84px;
      font-weight: bold;
      @include font_size($font_large);
      @include text_color();
      padding: 0 20px;
    }
    border-bottom: 1px solid #cccccc;
  }
}
</style>
