<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button
        class="check-buttom"
        :is-checked="isChecked"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计： {{ totalPrice | price }}</div>
    <div class="calculate">去计算({{ totalLen }})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return item.num * item.price + preValue;
        }, 0);
    },
    totalLen() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isChecked() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  methods: {
    checkClick() {
      if (!this.isChecked) {
        this.cartList.forEach((item) => {
          !item.checked && (item.checked = true);
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked && (item.checked = false);
        });
      }
    },
  },
  filters: {
    price(value) {
      return "￥" + value.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  background-color: #eeeeee;
  height: 40px;
  line-height: 40px;
  display: flex;
}

.check-content {
  display: flex;
  align-items: center;
}

.check-buttom {
  margin-left: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  flex: 1;
  margin-left: 15px;
}
.calculate {
  width: 90px;
  background-color: tomato;
  text-align: center;
}
</style>
