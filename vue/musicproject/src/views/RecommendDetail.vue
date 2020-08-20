<template>
  <div class="detail">
    <sub-header :title="title"></sub-header>
    <detail-top-pic :pic="imgPath" ref="top"></detail-top-pic>
    <div class="bottom">
      <scroll-view ref="scrollview">
        <detail-bottom :playlist="playlist"></detail-bottom>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { getNewSongDetail, getAlbumContent } from "../api";
import SubHeader from "../components/newSongDetail/SubHeader.vue";
import DetailTopPic from "../components/newSongDetail/DetailTopPic.vue";
import DetailBottom from "../components/newSongDetail/DetailBottom.vue";
import ScrollView from "../components/ScrollView.vue";

export default {
  name: "RecommendDetail",
  components: {
    SubHeader,
    DetailTopPic,
    DetailBottom,
    ScrollView,
  },
  data() {
    return {
      title: "",
      newSongDetail: {},
      imgPath: "",
      playlist: [],
    };
  },
  created() {
    this.getNewSongDetail();
  },
  methods: {
    async getNewSongDetail() {
      if (this.$route.params.type === "song") {
        const newSongDetail = await getNewSongDetail(this.$route.params.id);
        this.newSongDetail = newSongDetail.data;
        this.title = this.newSongDetail.playlist.name;
        this.imgPath = this.newSongDetail.playlist.coverImgUrl;
        this.playlist = this.newSongDetail.playlist.tracks;
      } else if (this.$route.params.type === "album") {
        const newAlbumDetail = await getAlbumContent(this.$route.params.id);
        this.newSongDetail = newAlbumDetail.data;
        this.title = this.newSongDetail.album.name;
        this.imgPath = this.newSongDetail.album.artist.picUrl;
        this.playlist = this.newSongDetail.songs;
      }
    },
  },
  mounted() {
    this.$refs.scrollview.scroll((y) => {
      const defaultHeight = this.$refs.top.$el.offsetHeight;
      if (y > 0) {
        //向下滚动，图片放大
        let expand = 1 + y / defaultHeight; //图片放大的系数

        this.$refs.top.$el.style.transform = `scale(${expand})`;
      } else {
        // 向上滑动,图片变模糊
        // let vague = (20 * Math.abs(y)) / defaultHeight;
        // this.$refs.top.$el.style.filter = `blur(${vague}px)`;
        /*
        注意： 高斯模糊是非常消耗性能的，不建议在移动端使用，如果非要使用，建议只使用一次
        */
        let vague = Math.abs(y) / defaultHeight;
        this.$refs.top.vaguePic(vague);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";
.detail {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @include bg_sub_color();
  .bottom {
    position: fixed;
    top: 500px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
