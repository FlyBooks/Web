<template>
  <swiper class="banner">
    <swiper-slide :options="swiperOptions">
      <div class="cd-wrapper" ref="img">
        <img :src="currentSong.picUrl" alt="" />
      </div>
      <p class="lyric">{{ firstLineLyric }}</p>
    </swiper-slide>
    <swiper-slide class="float-lyric">
      <scroll-view ref="lyricscroll">
        <ul>
          <li
            v-for="(value, index) in currentLyric"
            :key="index"
            :class="{ active: index === lyricTime }"
          >
            {{ value }}
          </li>
        </ul>
      </scroll-view>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ScrollView from "../../components/ScrollView.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PlayerMiddle",
  components: {
    swiper,
    swiperSlide,
    ScrollView,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
      lyricTime: "0",
    };
  },
  props: {
    currentTime: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    ...mapActions(["setIsPlaying", "setLyric", "setCurrentLyric"]),
    findLiveIndex(index) {
      if (index < 0) {
        return this.lyricTime;
      }
      if (this.currentLyric[index + ""]) {
        return index + "";
      } else {
        index--;
        return this.findLiveIndex(index);
      }
    },
  },
  computed: {
    ...mapGetters(["isPlaying", "currentSong", "currentLyric", "curTime"]),
    firstLineLyric() {
      for (let key in this.currentLyric) {
        return this.currentLyric[key];
      }
    },
  },
  watch: {
    isPlaying(newValue, oldValue) {
      if (newValue) {
        this.$refs.img.classList.remove("inactive");
      } else {
        this.$refs.img.classList.add("inactive");
      }
    },
    currentSong(newValue) {
      if (newValue) {
        this.setCurrentLyric(newValue.id);
        this.$refs.lyricscroll.refresh();
      }
    },
    currentTime(newTime, oldTime) {
      let curT = Math.floor(newTime) + "";
      // console.log(typeof this.curTime, typeof this.currentTime, "value");
      if (this.curTime === this.currentTime + "") {
        curT = this.findLiveIndex(parseInt(curT));
      }
      if (this.currentLyric[curT]) {
        this.lyricTime = curT;
        const highlightLyricHeight = document.querySelector("li.active")
          .offsetTop; //高亮歌词距顶部的距离

        const WholeLyricHeight = this.$refs.lyricscroll.$el.offsetHeight; //可滚动的高度
        if (highlightLyricHeight > WholeLyricHeight / 2) {
          this.$refs.lyricscroll.scrollTo(
            0,
            WholeLyricHeight / 2 - highlightLyricHeight,
            100
          );
        } else {
          this.$refs.lyricscroll.scrollTo(0, 0, 100);
        }
      }
    },
    currentLyric(newValue) {
      for (let key in newValue) {
        this.lyricTime = key;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";
.banner {
  position: fixed;
  top: 150px;
  bottom: 250px;
  left: 0;
  right: 0;
  .cd-wrapper {
    display: block;
    width: 500px;
    height: 500px;
    border: 20px solid white;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    animation: sport 5s linear infinite;
    animation-play-state: running;
    &.inactive {
      animation-play-state: paused;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lyric {
    margin-top: 30px;
    text-align: center;
    @include font_size($font_medium);
    @include text_color();
  }
  .float-lyric {
    li {
      text-align: center;
      @include font_size($font_medium);
      @include text_color();
      margin: 10px 0;
      &.active {
        color: #ffffff;
      }
      &:last-of-type {
        padding-bottom: 50%;
      }
    }
  }
}
@keyframes sport {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
