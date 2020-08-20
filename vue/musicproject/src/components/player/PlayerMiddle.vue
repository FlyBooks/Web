<template>
  <swiper class="banner">
    <swiper-slide :options="swiperOptions">
      <div class="cd-wrapper">
        <img
          src="http://p3.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg"
          alt=""
        />
      </div>
      <p class="lyric">hihi</p>
    </swiper-slide>
    <swiper-slide class="float-lyric">
      <scroll-view>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
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
  left:0;
  right:0;
  .cd-wrapper {
    display: block;
    width: 500px;
    height: 500px;
    border: 20px solid white;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
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
  .float-lyric{
    li{
      text-align: center;
      @include font_size($font_medium);
      @include text_color();
      margin:10px 0;
    }
  }
}
</style>
