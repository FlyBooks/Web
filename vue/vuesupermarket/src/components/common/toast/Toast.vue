<template>
  <div class="toast" v-if="isShow">{{ msg }}</div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    msg: {
      type: String,
    },
    isShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    show(msg, duration = 2000) {
      this.msg = msg;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    },
  },
};
</script>

<style scroped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  border-radius: 8px 10px;
  z-index: 999;
}
</style>
