<template>
  <div class="singer">
    <scroll-view ref="scrollview">
      <ul class="singer-group">
        <li v-for="value in topArtistsInfo" :key="value.key" ref="artistInfo">
          <h2>{{ value.key }}</h2>
          <ul class="group-artist">
            <li
              v-for="artist in value.list"
              :key="artist.id"
              class="one-artist"
            >
              <img class="artist-pic" v-lazy="artist.picUrl" />
              <p class="artist-name">{{ artist.name }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </scroll-view>
    <ul class="index-table">
      <li
        v-for="(value, index) in topArtistsInfo"
        :key="value.key"
        class="index-item"
        :data-index="index"
        @touchstart.prevent.stop="touchstart"
        @touchmove.prevent.stop="touchmove"
        :class="{ active: currentIndex === index }"
      >
        {{ value.key }}
      </li>
    </ul>
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
      indexTopOffset: [], //每次字母索引对应的offsetTop值
      currentIndex: 0,
      stopInitial: 0,
      stopAfter: 0,
    };
  },
  methods: {
    _fastJump(index) {
      this.$refs.scrollview.scrollTo(0, -this.indexTopOffset[index]);
      this.currentIndex = index;
    },
    touchstart(e) {
      this._fastJump(parseInt(e.target.dataset.index)); //注意：e.target.dataset.index获取的字符类型是字符串
      this.stopInitial = e.touches[0].pageY;
    },
    touchmove(e) {
      this.stopAfter = e.touches[0].pageY;
      let currentIndex = Math.floor(
        (this.stopAfter - this.stopInitial) / e.target.offsetHeight
      );
      currentIndex = parseInt(e.target.dataset.index) + currentIndex;
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex > this.topArtistsInfo.length - 1) {
        currentIndex = this.topArtistsInfo.length - 1;
      }

      this._fastJump(currentIndex);
    },
  },

  watch: {
    topArtistsInfo(newValue) {
      this.$nextTick(() => {
        this.$refs.artistInfo.forEach((item, index) => {
          this.indexTopOffset.push(item.offsetTop);
        });
      });
    },
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
          .artist-name {
            @include font_size($font_medium_s);
            @include font_color();
          }
          border-bottom: 1px solid #cccccc;
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

  .index-table {
    position: fixed;
    top: 55%;
    right: 10px;
    transform: translateY(-50%);
    text-align: center;

    .index-item {
      padding: 5px 0;
      @include font_size($font_samll);
      @include font_color();
      &.active {
        text-shadow: 0px 0px 10px red;
      }
    }
  }
}
</style>
