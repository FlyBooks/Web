<template>
  <div >
    <swiper class="detail-swiper" v-if="topimages.length">
      <swiper-item v-for="(item, index) in topimages" :key="index" class="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topimages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
/* .detail-swiper {
  height: 300px;
  overflow: hidden;
} */

/* .item {
  text-align: center;
  height: 300px;
  width: 100%;
} */

.detail-swiper{
  height: 300px;
  overflow: hidden;
}


/* .item img {
  overflow: hidden;
} */
</style>
