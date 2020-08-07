<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper banner">
    <swiper-slide
      v-for="banner in banners"
      :key="banner.bannerId"
      class="banner-item"
    >
      <a :href="banner.url">
        <img :src="banner.pic" alt="" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getHotComments } from "../api";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "Banner",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
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
          el: ".swiper-pagination",
          clickable: true,
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
    };
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  .banner-item {
    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
