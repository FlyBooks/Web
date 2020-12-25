<template>
  <div class="profile-top">
    <div class="play-all" @click="playAllSongs">
      <span></span>
      <p>播放全部</p>
    </div>
    <div class="song-list">
      <scroll-view>
        <new-song-list
          :newsong="profileindex ? historySongs : favSongs"
        ></new-song-list>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import ScrollView from "../ScrollView.vue";
import NewSongList from "../NewSongList.vue";
import NewSong from "../recommend/NewSong.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "ProfileContent",
  components: {
    ScrollView,
    NewSongList,
    NewSong,
  },
  props: {
    profileindex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(["historySongs", "favSongs"]),
  },
  methods: {
    ...mapMutations(["setSongs"]),
    ...mapActions(["setIsFullpagePlay", "setcurrentIndex"]),
    playAllSongs() {
      if (this.profileindex) {
        this.setSongs(this.historySongs);
      } else {
        this.setSongs(this.favSongs);
      }
      this.setcurrentIndex(0);
      this.setIsFullpagePlay(true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/mixin.scss";
@import "./../../assets/css/variable.scss";
.profile-top {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  .play-all {
    margin: 20px auto;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 60px;
    border: 1px solid #000;
    border-radius: 30px;
    @include border_color();
    span {
      width: 45px;
      height: 45px;
      @include bg_img("../../assets/images/small_play");
      margin-right: 5px;
    }
  }
  .song-list {
    position: fixed;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
