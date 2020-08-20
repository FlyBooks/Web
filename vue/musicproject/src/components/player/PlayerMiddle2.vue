<template>
  <swiper class="banner">
    <swiper-slide :options="swiperOptions" class="cd">
      <div class="cd-wrapper">
        <img
          src="http://p3.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg"
          alt=""
        />
      </div>
      <p class="lyric">hihi</p>
    </swiper-slide>
    <swiper-slide>jjjjj</swiper-slide>
    <div class="swiper-pagination2" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "PlayerMiddle2",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        speed: 1000,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
    };
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
  .cd {
    .cd-wrapper {
      display: block;
      width: 500px;
      height: 500px;
      border: 20px solid lightcyan;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .lyric {
    margin-top: 30px;
    text-align: center;
    @include font_size($font_medium);
    @include text_color();
  }
}
</style>

<style lang="scss">
@import "../../assets/css/mixin";
.my-bullet {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: black;
  margin: 0 20px;
  z-index: 99999;
}
.my-bullet-active {
  width: 60px;
  @include bg_color();
}
</style>
