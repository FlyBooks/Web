<template>
  <div>
    <swiper>
      <swiper-item v-for="item in lists" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoad()" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperimg");
        this.isLoad = true;
      }
    }
  }
};
</script>
