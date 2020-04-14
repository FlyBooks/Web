<template>
<tab-bar>

<tab-bar-item to="/home">
<img src="../../../assets/img/all.png" slot="item-icon" />
<img src="../../../assets/img/all1.png" slot="item-icon-active" />
<span slot="item-text">首页</span>
</tab-bar-item>

<tab-bar-item to="/category">
<img src="../../../assets/img/category.png" slot="item-icon" />
<img src="../../../assets/img/category1.png" slot="item-icon-active" />
<span slot="item-text">分类</span>
</tab-bar-item>

<tab-bar-item to="/cart">
<img src="../../../assets/img/add-cart.png" slot="item-icon" />
<img src="../../../assets/img/add-cart1.png" slot="item-icon-active" />
<span slot="item-text">购物车</span>
</tab-bar-item>

<tab-bar-item to="/profile">
<img src="../../../assets/img/usercenter.png" slot="item-icon" />
<img src="../../../assets/img/usercenter1.png" slot="item-icon-active" />
<span slot="item-text">我的</span>
</tab-bar-item>

</tab-bar>
</template>


<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
name: "MainTabBar",
components: {
	TabBar,
	TabBarItem	
}
}

</script>

