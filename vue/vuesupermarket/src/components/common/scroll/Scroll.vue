<template>
  <!-- ref一般是给子组件使用 
ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象
ref如果是绑定在普通元素中，那么通过this.$refs.refname获取到的是一个元素对象
  -->
  <div class="warpper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeNum: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: ""
    };
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeNum,
      pullUpLoad: this.pullUpLoad
    });

    if (this.probeNum === 2 || this.probeNum === 3) {
      this.bscroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
        this.$emit("pullingup");
        this.bscroll.finishPullUp();
      });
    }
  },
  methods: {
    toScroll(x, y, time = 500) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    imgLoadFresh() {
      this.bscroll && this.bscroll.refresh();
    }
  }
};
</script>
