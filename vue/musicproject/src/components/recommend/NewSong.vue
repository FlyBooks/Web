<template>
  <div class="song">
    <div class="song-top">
      <h3>最新音乐</h3>
    </div>
    <div class="song-content">
      <ul class="song-items">
        <li v-for="song in newsong" :key="song.id" class="song-item">
          <img v-lazy="song.song.album.picUrl" alt="" />
          <div>
            <h3>{{ song.song.album.name }}</h3>
            <p>{{ song.song.artists[0].name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSong",
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
  .song-content {
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
          @include text_color();
          h3 {
            @include font_size($font_medium);
          }
          p {
            @include font_size($font_samll);
            margin-top: 10px;
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
