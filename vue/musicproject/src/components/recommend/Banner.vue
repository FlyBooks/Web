<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    class="swiper banner"
    v-if="banners.length > 0"
  >
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
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Banner",
  components: {
    swiper,
    swiperSlide,
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
        speed: 1000,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
      index: 0,
    };
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
<style lang="scss">
@import "../../assets/css/mixin.scss";
.swiper-pagination-bullet {
  opacity: 1;
  background-color: #ffffff;
  width: 16px;
  height: 16px;
}
.swiper-pagination-bullet-active {
  @include bg_color();
}
</style>
