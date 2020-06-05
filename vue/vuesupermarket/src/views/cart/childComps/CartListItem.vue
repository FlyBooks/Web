<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="item.checked" @checktoggle="toggleChecked"></check-button>
    </div>
    <div class="item-img">
      <img :src="item.image" />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述： {{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{item.price | price}}</div>
        <div class="item-count right">x{{item.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    price(itemPrice) {
      return "￥" + parseInt(itemPrice).toFixed(2);
    }
  },
  methods:{
    toggleChecked(){
      this.item.checked = ! this.item.checked
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  /* font-size: 0; */
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>