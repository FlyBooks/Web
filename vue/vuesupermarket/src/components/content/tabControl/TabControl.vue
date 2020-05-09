<template>
<div class="tab-control">
 <div v-for="(title, index) in titles" :key="title" @click="itemClick(index)" class="tab-control-item" >
   <span :class="{active: index === currentIndex}"> {{title}} </span>
 </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array, 
      default(){
        return []; 
      }
    }
  
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('gettype',index);
    }

  },
  data(){
    return {
      currentIndex: 0
    }

  }


}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: white;
  z-index: 19;
}

.tab-control-item {
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}

/* .tab-control-item span:hover {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
} */

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
