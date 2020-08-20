<template>
  <div class="detail-pic">
    <img :src="pic" alt="" />
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "DetailTopPic",
  props: {
    pic: {
      type: String,
      default: "",
    },
  },
  methods: {
    vaguePic(vagueNum) {
      this.$refs.mask.style.opacity = vagueNum;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-pic {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    /* right: 0; */
    /* bottom: 0;  */
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
  }
}
</style>
