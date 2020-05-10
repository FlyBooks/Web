<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-fixed"
      :titles="['流行','新款','精选']"
      @gettype="sendType"
      ref="tabControl1"
      v-show="isTabControlFixed"
    ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-num="3"
      @scroll="backTopToggle"
      :pull-up-load="true"
      @pullingup="pullMoreData()"
    >
      <home-swiper :lists="lists" @swiperimg="caloffsetTop()"></home-swiper>
      <recommend-view :recommendedviews="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @gettype="sendType" ref="tabControl2"></tab-control>
      <goods-list :goods="showTypeData"></goods-list>
    </scroll>
    <back-top @click.native="backClick()" v-show="isShow"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "../../network/home.js";

import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { itemListListener } from "../../common/mixin.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      lists: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isTabControlFixed: false
    };
  },
  created() {
    //created里面的this是当前的这个组件
    this.getHomeMultidata();

    //在这里将所有的类型数据一下子请求完毕
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemListListener],
  methods: {
    //网络请求方法
    getHomeMultidata() {
      //1. 请求多个数据
      getHomeMultidata().then(res => {
        this.lists = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list); //直接对数组res.data.list进行解析，然后一个个放入新的数组中
        this.goods[type].page += 1;
      });
    },
    //事件监听相关方法
    sendType(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }

      //统一吸顶的tabControl跟普通的tabControl
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      //this.$refs.backToTop.bscroll拿到bscroll对象
      //this.$refs.backToTop.bscroll.scrollTo(0,0,500);
      this.$refs.scroll.toScroll(0, 0);
    },
    backTopToggle(position) {
      //console.log(position);
      //BackTop是否显示
      this.isShow = position.y < -500;

      //决定tabControl是否吸顶(positon: fixed)
      this.isTabControlFixed = this.tabOffsetTop < -position.y;
    },
    pullMoreData() {
      this.getHomeGoods(this.type);
    },
    caloffsetTop() {
      //当首页轮播图加载完毕后，我们计算出el的offsetTop的值
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    showTypeData() {
      return this.goods[this.type]["list"];
    }
  },
  destroyed() {
    console.log("home destroyed");
  },
  //keep-alive启动的时候，activated()跟deactivated()函数才可以生效
  activated() {},
  deactivated() {
    //const y = this.$refs.backToTop.bscroll.y;
    this.$bus.$off("imgloadfinished", this.itemImgListener);
  }
};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /*在使用原生的,没有使用Better Scroll的时候需要这样写*/
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

/* .tab-control {
  position: sticky;
  top: 44px;
} */

.tab-fixed {
  position: relative;
  z-index: 19;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
