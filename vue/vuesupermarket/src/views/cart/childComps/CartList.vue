<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item v-for="(item, index) in cartList" :key="index" :item="item"></cart-list-item>
      
      </div>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"])
  },
  activated() {
    this.$refs.scroll.bscroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
