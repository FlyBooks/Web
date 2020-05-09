<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll2">
      <div>
        <detail-swiper :topimages="topImages"></detail-swiper>
        <detail-base-info :goodsinfo="goodsInfo"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <!-- <detail-goods-info :detailinfo="detailInfo" @imgload="freshPic"></detail-goods-info> -->
        <detail-param-info :paramsinfo="paramInfo"></detail-param-info>
        <detail-comments :comments="comments"></detail-comments>

        <!-- <back-top class="back-top" v-show="true" @click.native="backToTop()">
          <img src="../../assets/img/common/top.png" />
        </back-top> -->
        <recommend-view :goods="recommends"></recommend-view>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailComments from "./childComps/DetailComments.vue";

import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodParam
} from "../../network/detail.js";

import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import RecommendView from "../../components/content/goods/GoodsList";
import { debounce } from "../../common/utils.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    RecommendView,
    Scroll,
    BackTop
  },
  created() {
    //created钩子函数一般主要是用来初始化数据的
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      //轮播图信息数据
      this.topImages = res.result.itemInfo.topImages;
      //这里返回的是类，所以一定要new
      this.goodsInfo = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      this.shop = new Shop(res.result.shopInfo);

      //商品详情
      this.detailInfo = res.result.detailInfo;

      //获取参数信息
      this.paramInfo = new GoodParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      //评论信息
      if (res.result.rate.cRate) {
        this.comments = res.result.rate.list[0];
      }
    });

    //获取推荐的数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  data() {
    return {
      id: "",
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comments: {},
      recommends: [],
      detailImgFresh: null
    };
  },
  methods: {
    freshPic() {
      this.$refs.scroll2.bscroll.refresh();
    },
    backToTop() {
      this.$refs.scroll2.toScroll(0, 0);
    }
  },
  mounted() {
    let newFresh = debounce(this.$refs.scroll2.imgLoadFresh, 100);
    this.detailImgFresh = () => {
      newFresh();
    };
    this.$bus.$on("imgloadfinished", this.detailImgFresh);
  },
  destroyed() {
    this.$bus.$off("imgloadfinished", this.detailImgFresh);
  }
};
</script>

<style  scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.scroll2 {
  height: calc(100% - 44px);
  position: absolute;
  background-color: #fff;
  overflow: hidden;
}

.scroll {
  position: absolute;
  top: 44px;
  /* bottom: 49px; */
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 70px;
}
</style>
