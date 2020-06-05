<template>
  <div id="detail">
    <detail-nav-bar @titleclick="titleClick" ref="detailNavBar"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probe-num="3" @scroll="contentScroll">
      <div>
        <detail-swiper :topimages="topImages"></detail-swiper>
        <detail-base-info :goodsinfo="goodsInfo"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailinfo="detailInfo" @imgload="freshPic"></detail-goods-info>
        <detail-param-info ref="param" :paramsinfo="paramInfo"></detail-param-info>
        <detail-comments ref="comments" :comments="comments"></detail-comments>

        <recommend-view :goods="recommends" ref="recommends"></recommend-view>
      </div>
    </scroll>
    <back-top class="back-top" v-show="isShow" @click.native="backToTop()">
      <img src="../../assets/img/common/top.png" />
    </back-top>
    <detail-bottom-bar @addCart="addToCart()"></detail-bottom-bar>
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
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodParam
} from "../../network/detail.js";

import { itemListListener, listenBackToTop } from "../../common/mixin.js";

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
    DetailBottomBar,
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

      //这个也可以在updated()函数里面写，获取每个主题的高度
      //这里的dom是已经渲染出来了，但是图片没有完全渲染出来
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(-this.$refs.comments.$el.offsetTop);
      //   this.themeTopYs.push(-this.$refs.recommends.$el.offsetTop);
      // });
      //对getThemeTopYs进行防抖操作
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(-this.$refs.comments.$el.offsetTop);
        this.themeTopYs.push(-this.$refs.recommends.$el.offsetTop);
      }, 100);
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
      themeTopYs: [],
      getThemeTopYs: null
    };
  },
  methods: {
    freshPic() {
      this.$refs.scroll.bscroll.refresh();
      this.getThemeTopYs();
    },
    titleClick(index) {
      this.$refs.scroll.bscroll.scrollTo(0, this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      if (
        this.$refs.detailNavBar.currentIndex !== 0 &&
        position.y > this.themeTopYs[1]
      ) {
        this.$refs.detailNavBar.currentIndex = 0;
      } else if (
        this.$refs.detailNavBar.currentIndex !== 1 &&
        position.y < this.themeTopYs[1] &&
        position.y > this.themeTopYs[2]
      ) {
        this.$refs.detailNavBar.currentIndex = 1;
      } else if (
        this.$refs.detailNavBar.currentIndex !== 2 &&
        position.y < this.themeTopYs[2] &&
        position.y > this.themeTopYs[3]
      ) {
        this.$refs.detailNavBar.currentIndex = 2;
      } else if (
        this.$refs.detailNavBar.currentIndex !== 3 &&
        position.y < this.themeTopYs[3]
      ) {
        this.$refs.detailNavBar.currentIndex = 3;
      }

      if (!this.isShow && position.y < -500) {
        this.isShow = true;
      }

      if (this.isShow && position.y > -500) {
        this.isShow = false;
      }
    },
    addToCart() {
      const productInfo = {};
      productInfo.image = this.topImages[0];
      productInfo.title = this.goodsInfo.title;
      productInfo.desc = this.goodsInfo.desc;
      productInfo.price = this.goodsInfo.nowPrice;
      productInfo.id = this.id;
      productInfo.num = 1;
      productInfo.checked = true;

      this.$store.dispatch('addCartInfo',productInfo)
    }
  },
  mixins: [itemListListener, listenBackToTop],
  destroyed() {
    this.$bus.$off("imgloadfinished", this.itemImgListener);
  }
  // updated(){
  //   this.themeTopYs = [];
  //   this.themeTopYs.push(0);
  //   this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
  //   this.themeTopYs.push(-this.$refs.comments.$el.offsetTop);
  //   this.themeTopYs.push(-this.$refs.recommends.$el.offsetTop);
  // }
};
</script>

<style  scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.scroll {
  height: calc(100% - 44px - 49px);
  position: relative;
  background-color: #fff;
  overflow: hidden;
}

.scroll2 {
  position: relative;
  top: 44px;
  /* bottom: 49px; */
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
  bottom: 49px;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 70px;
}
</style>
