<template>
   <tabbar>
     <tabbaritem path="/home" activeColor="blue"> <img slot="item-icon" src="~assets/img/all.png" />  <img slot="item-icon-active" src="~assets/img/all1.png" /> <div slot="item-text" >首页</div> 
     </tabbaritem> 
   
      <tabbaritem path="/category"> <img slot="item-icon" src="~assets/img/category.png" /> <img slot="item-icon-active" src="~assets/img/category1.png" />  <div slot="item-text" >分类</div> 
      </tabbaritem> 
  
      <tabbaritem path="/cart"> <img slot="item-icon" src="~assets/img/add-cart.png" /> <img slot="item-icon-active" src="~assets/img/add-cart1.png" /> <div slot="item-text">购物车</div> 
      </tabbaritem>
  
      <tabbaritem path="/profile"> 
        <img slot="item-icon" src="~assets/img/usercenter.png" /> 
        <img slot="item-icon-active" src="~assets/img/usercenter1.png" /> 
        <div slot="item-text">我的</div> 
      </tabbaritem>   
   </tabbar>
</template>

<script>
import tabbar from "./tabbar/TabBar";
import tabbaritem from "./tabbar/TarBarItem";
export default {
  name: "MainTabBar",
  components: {
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>
</style>
