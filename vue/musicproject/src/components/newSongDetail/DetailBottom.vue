<template>
  <ul class="detail-bottom">
    <li class="play-all" @click="playAllSongs()">
      <div class="play-img"></div>
      <p class="play-bottom">播放全部</p>
    </li>
    <li
      v-for="item in playlist"
      :key="item.id"
      class="item"
      @click.stop="showFullpagePlayer(item.id)"
    >
      <h3>{{ item.name }}</h3>
      <div>{{ item.al.name }}-{{ item.ar[0].name }}</div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DetailBottom",
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions(["setSongsDetail", "setCurrentLyric", "setIsMiniPlayer"]),
    showFullpagePlayer(id) {
      this.setSongsDetail([id]);
      this.$store.dispatch("setIsFullpagePlay", true);
      this.setCurrentLyric(id);
      this.setIsMiniPlayer(false);
    },
    playAllSongs() {
      const songIds = this.playlist.map((list) => {
        return list.id;
      });
      this.setSongsDetail(songIds);
      this.$store.dispatch("setIsFullpagePlay", true);
      this.setIsMiniPlayer(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable.scss";
@import "../../assets/css/mixin.scss";
.detail-bottom {
  width: 100%;
  li {
    height: 120px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    @include bg_sub_color();
    border-bottom: 1px solid #cccccc;
  }
  .play-all {
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    .play-img {
      width: 60px;
      height: 60px;
      @include bg_img("../../assets/images/small_play");
      margin-right: 20px;
    }
    .play-bottom {
      @include text_color();
      @include font_size($font_large);
    }
  }
  .item {
    h3 {
      @include font_size($font_medium);
      @include text_color();
    }
    div {
      margin-top: 10px;
      @include font_size($font_samll);
      @include text_color();
      opacity: 0.8;
    }
  }
}
</style>
