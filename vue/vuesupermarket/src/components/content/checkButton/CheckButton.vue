<template>
  <div>
    <img src="../../../assets/img/cart/tick.svg" alt=""  :class="{check: isChecked}" @click="checkToggle()"/>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
      isChecked:{
          type: Boolean,
          default: false
      }
  },
  methods:{
      checkToggle(){
        this.$emit('checktoggle');
      }
  }
};
</script>

<style scoped>
img {
  border-radius: 50%;
  background-color: #cccccc;
  border: 2px solid #aaaaaa;
}

.check {
  background-color: orange;
  border: 2px solid orange;
}
</style>
