<template>
  <div v-if="Object.keys(goodsinfo).length !== 0" >
    <div class="base-info">{{goodsinfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsinfo.price}}</span>
      <span class="o-price">{{goodsinfo.oldPrice}}</span>
      <span class="discount">{{goodsinfo.desc}}</span>
    </div>
    <div class="info-other"><span>{{goodsinfo.columns[0]}}</span> <span>{{goodsinfo.columns[1]}}</span> <span>{{goodsinfo.columns[2]}}</span></div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-price{
  margin-top: 10px;
}

.o-price{
  text-decoration: line-through;
  font-size: 12px;
}

.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color:var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  position:relative;/*让元素上浮，使用相对位置*/
  top: -8px;
}

.info-other {
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
</style>
