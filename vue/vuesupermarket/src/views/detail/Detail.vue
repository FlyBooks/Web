<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topimages="topImages"></detail-swiper>
    <detail-base-info :goodsinfo="goodsInfo"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";

import { getDetail, GoodsInfo, Shop } from "../../network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created() {
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      //这里返回的是类，所以一定要new
      this.goodsInfo = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      console.log(res.result);
      this.shop = new Shop(res.result.shopInfo);
    });
  },
  data() {
    return {
      id: "",
      topImages: [],
      goodsInfo: {},
      shop: {}
    };
  }
};
</script>

<style >
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
</style>
