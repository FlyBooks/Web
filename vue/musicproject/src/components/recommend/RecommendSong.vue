<template>
  <div class="recommend-song">
    <div class="song-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="songs-display">
      <div class="song-display" v-for="song in recommendsongs" :key="song.id">
        <img v-lazy="song.picUrl" alt="" @click="sendId(song.id)" />
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
  methods: {
    sendId(id) {
      if (this.title === "推荐歌单") {
        this.$emit("songid", id, "song");
      } else {
        this.$emit("songid", id, "album");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable.scss";
@import "../../assets/css/mixin.scss";
.recommend-song {
  @include bg_sub_color();
  .song-title {
    width: 100%;
    height: 84px;
    line-height: 84px;

    h3 {
      @include font_size($font_large);
      font-weight: bold;
      @include text_color();
      padding: 0px 20px;
      /* border-left: 8px solid hotpink; */
    }
    border-bottom: 2px solid #cccccc;
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
        @include font_size($font_samll);
        @include text_color();
        text-align: center;
      }
    }
  }
}
</style>
