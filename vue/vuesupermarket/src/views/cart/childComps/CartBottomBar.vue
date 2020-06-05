<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
  <check-button class="check-buttom"></check-button>
  <span>全选</span>
    </div>
    <div>
      合计：
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import {mapGetters} from 'vuex';

export default {
  name: "CartBottomBar",
  components:{
    CheckButton
  },
  computed(){
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList;
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar{
    background-color: #eeeeee;
    height: 40px;
    line-height: 40px;
}

.check-content{
  display: flex;
  align-items: center;
}

.check-buttom{
  margin-left: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
</style>
