<template>
    <div class="tab-bar-item">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle" @click="itemClick()"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "TarBarItem",
  data(){
    return {
      //isActive: false
    }
  },
  props: {
     path: {
       type: String,
       default: "/home"
     },
     activeColor: {
       type: String,
       default: 'red'
     }
  },
  methods: {
    itemClick(){
       console.log(this.path);
       this.$router.replace({
         path: this.path
       }).catch(err => err);
    }
  },
  computed: {
    isActive(){
        console.log(this.$route.path,'path');
    	return this.$route.path.indexOf(this.path)!== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style>
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

.active {
  color: red;
}
</style>
