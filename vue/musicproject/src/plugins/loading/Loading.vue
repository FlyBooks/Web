<template>
  <div class="loading" v-if="isShow">
    <div class="box"></div>
    <div class="text">正在加载...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scroped>
.loading {
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.box {
  width: 100px;
  height: 100px;
  border: 10px solid white;
  border-radius: 50%;
  margin: 20px auto;
  border-right-color: yellowgreen;
  animation: loading 3s linear 0s infinite;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.text {
  color: white;
  text-align: center;
}
</style>
