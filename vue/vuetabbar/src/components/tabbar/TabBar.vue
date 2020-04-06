<template>
  <div class="tab-bar">
  
  <!-- <div class="mainstyle">  <img src="../../assets/img/all.png"   alt=""> <div>首页</div> </div>
  <div class="mainstyle">  <img src="../../assets/img/category.png"   alt=""> <div>分类</div> </div>
  <div class="mainstyle">  <img src="../../assets/img/add-cart.png"   alt=""> <div>购物车</div></div>
  <div class="mainstyle">  <img src="../../assets/img/usercenter.png" alt=""> <div>我的</div></div> -->
  <slot></slot>
  </div>
</template>


<script>

export default {
  name: "TarBar",

}
</script>

<style scoped>

.tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}

</style>
