<template>
  <div class="tab-bar-item">
    <div v-if="!activeState"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" @click="itemClick()"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      isActive: false
    }
  },
  props:{
    to: {
      default: '/home',
      type: String
    },
    activeColor: {
      default: 'red',
      type: String
    }
  },
  methods: {
    itemClick(){
      this.$router.replace({
        path: this.to
      }).catch(err => err);
    } 
  },
  computed:{
    activeState(){
      return this.$route.path.indexOf(this.to)!== -1;
    },
    activeStyle(){
      return this.activeState? {color: this.activeColor}: {};
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
 flex: 1;
 text-align: center;
 height: 49px;
 font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


.activeColor{
  color: red;
}
</style>
