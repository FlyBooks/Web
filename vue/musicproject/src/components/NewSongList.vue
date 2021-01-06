<template>
  <ul class="song-items">
    <li
      v-for="song in newsong"
      :key="song.id"
      class="song-item"
      @click="showFullpagePlayer(song.id)"
    >
      <img v-lazy="song.picUrl" alt="" />
      <div>
        <h3>{{ song.name }}</h3>
        <p>{{ song.artist }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NewSongList",
  props: {
    newsong: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions(["setIsFullpagePlay", "setIsMiniPlayer", "setSongsDetail"]),
    showFullpagePlayer(songId) {
      this.setSongsDetail([songId]);
      this.setIsFullpagePlay(true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";
.song-items {
  width: 100%;
  .song-item {
    height: 200px;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid #cccccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      margin-right: 20px;
    }
    div {
      width: 60%;

      @include text_color();
      h3 {
        @include font_size($font_medium);
        @include no-wrap();
      }
      p {
        @include font_size($font_samll);
        @include no-wrap();
        margin-top: 10px;
        opacity: 0.6;
      }
    }
  }
}
</style>
