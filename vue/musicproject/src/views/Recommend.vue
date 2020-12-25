<template>
  <div class="recommend">
    <div class="recommend-wrapper">
      <scroll-view>
        <div>
          <banner :banners="banners"></banner>
          <recommend-song
            :recommendsongs="recomendSongs"
            title="推荐歌单"
            @songid="getSongId"
          ></recommend-song>
          <recommend-song
            :recommendsongs="newLatestAlbum"
            title="最新专辑"
            @songid="getSongId"
          ></recommend-song>
          <new-song :newsong="newSong"></new-song>
        </div>
      </scroll-view>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {
  getBanners,
  getRecommendSongs,
  getLatestAlbum,
  getNewSong,
} from "../api";
import Banner from "../components/recommend/Banner.vue";
import RecommendSong from "../components/recommend/RecommendSong.vue";
import NewSong from "../components/recommend/NewSong.vue";
import ScrollView from "../components/ScrollView.vue";
export default {
  name: "Recommend",
  components: {
    Banner,
    RecommendSong,
    NewSong,
    ScrollView,
  },
  data() {
    return {
      banners: [],
      recomendSongs: [],
      newLatestAlbum: [],
      newSong: [],
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
      const newSong = await getNewSong();

      this.banners = res.data.banners;
      //推荐歌单数据
      this.recomendSongs = recomendSongs.data.result;
      //最新专辑数据
      this.newLatestAlbum = newLatestAlbum.data.albums;
      //新音乐数据

      this.newSong = newSong.data.result.map((song) => {
        const artistsName = song.song.artists.reduce((oldValue, newValue) => {
          return oldValue.name
            ? oldValue.name + "-" + newValue.name
            : newValue.name;
        }, "");
        return {
          id: song.id,
          picUrl: song.song.album.picUrl,
          name: song.song.album.name,
          artist: artistsName,
        };
      });
    },
    getSongId(id, type) {
      this.$router.push({
        path: `/recommend/recommenddetail/${id}/${type}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.recommend {
  position: fixed;
  top: 184px;
  left: 0px;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  .recommend-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.v-enter {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0%);
}
.v-enter-active {
  transition: transform 1s;
}

.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>
