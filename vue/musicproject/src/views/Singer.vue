<template>
  <div class="singer">
    <scroll-view>
      <ul class="singer-group">
        <li v-for="value in topArtistsInfo" :key="value.key">
          <h2>{{ value.key }}</h2>
          <ul class="group-artist">
            <li
              v-for="artist in value.list"
              :key="artist.name"
              class="one-artist"
            >
              <img class="artist-pic" v-lazy="artist.picUrl" />
              <p class="artist-name">{{ artist.name }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
import { getArtistsByAllLetters } from "../api/index.js";
import ScrollView from "../components/ScrollView.vue";
export default {
  name: "Singer",
  components: {
    ScrollView,
  },
  data() {
    return {
      topArtistsInfo: [],
    };
  },
  async created() {
    this.topArtistsInfo = await getArtistsByAllLetters();
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixin.scss";
@import "../assets/css/variable.scss";

.singer {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: lightcyan;
  @include bg_sub_color();
  .singer-group {
    li {
      .group-artist {
        .one-artist {
          display: flex;
          align-items: center;
          .artist-pic {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            padding: 10px 10px;
          }
        }
      }
      h2 {
        background-color: red;
        color: white;
        @include font_size($font_medium);
        height: 45px;
        line-height: 45px;
        padding-left: 5px;
      }
    }
  }
}
</style>
