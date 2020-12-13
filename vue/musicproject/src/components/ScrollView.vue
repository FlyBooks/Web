<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from "iscroll/build/iscroll-probe";

export default {
  name: "ScrollView",
  mounted() {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      //解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
    });

    /*
MutationObserver构造函数只要监听到了指定内容发生了变化就会执行这个回调函数
mutationList: 发生变化的数组
observer:观察者对象
    */
    const observer = new MutationObserver((mutationList, observer) => {
      // console.log(this.iscroll.maxScrollY);
      this.iscroll.refresh();
      // console.log(this.iscroll.maxScrollY);
    });

    const config = {
      childList: true,
      subtree: true,
      attributeFilter: ["height", "offsetHeight"],
    };

    observer.observe(this.$refs.wrapper, config);
    // observer.disconnect(); //停止观察
  },
  methods: {
    scroll(fn) {
      this.iscroll.on("scroll", function() {
        fn(this.y);
      });
    },
    refresh() {
      setTimeout(() => {
        this.iscroll.refresh();
      }, 100);
    },
    scrollTo(x, y, time) {
      this.iscroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
