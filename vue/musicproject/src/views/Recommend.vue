<template>
  <div class="recommend">
    <banner :banners="banners"></banner>
    <recommend-song
      :recommendsongs="recomendSongs"
      title="推荐歌单"
    ></recommend-song>
    <recommend-song
      :recommendsongs="recomendSongs"
      title="推荐歌单"
    ></recommend-song>
  </div>
</template>

<script>
import { getBanners, getRecommendSongs, getLatestAlbum } from "../api";
import Banner from "../components/recommend/Banner.vue";
import RecommendSong from "../components/recommend/RecommendSong.vue";
export default {
  name: "Recommend",
  components: {
    Banner,
    RecommendSong,
  },
  data() {
    return {
      banners: [],
      recomendSongs: [],
      newLatestAlbum: [],
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    async getBanners() {
      const res = await getBanners();
      const recomendSongs = await getRecommendSongs();
      const newLatestAlbum = await getLatestAlbum();

      this.banners = res.data.banners;
      //推荐歌单数据
      this.recomendSongs = recomendSongs.data.result;
      //最新专辑数据
      this.newLatestAlbum = newLatestAlbum.data.albums;
    },
  },
};
</script>

<style scoped></style>
