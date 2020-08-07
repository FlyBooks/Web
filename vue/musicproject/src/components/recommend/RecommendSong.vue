<template>
  <div class="recommend-song">
    <div class="song-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="songs-display">
      <div class="song-display" v-for="song in recommendsongs" :key="song.id">
        <img :src="song.picUrl" alt="" />
        <p>{{ song.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendSong",
  props: {
    recommendsongs: {
      type: Array,
      default: () => [],
      require: true,
    },
    title: {
      type: String,
      default: "",
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable.scss";
@import "../../assets/css/mixin.scss";
.recommend-song {
  .song-title {
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    h3 {
      @include font_size($font_large);
      font-weight: bold;
      @include text_color();
      padding: 0px 20px;
      border-left: 8px solid hotpink;
    }
  }
  .songs-display {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px 10px;
    width: 100%;
    .song-display {
      width: 200px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
      }
      p {
        @include clamp(2);
      }
    }
  }
}
</style>
