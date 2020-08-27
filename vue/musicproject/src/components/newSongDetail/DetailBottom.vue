<template>
  <ul class="detail-bottom">
    <li class="play-all">
      <div class="play-img"></div>
      <p class="play-bottom">播放全部</p>
    </li>
    <li
      v-for="item in playlist"
      :key="item.id"
      class="item"
      @click.stop="showFullpagePlayer()"
    >
      <h3>{{ item.name }}</h3>
      <div>{{ item.al.name }}-{{ item.ar[0].name }}</div>
    </li>
  </ul>
</template>

<script>
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
    showFullpagePlayer() {
      this.$store.dispatch("setIsFullpagePlay", true);
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
