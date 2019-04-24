<template>
  <div class="goods-info">
    <div class="goods-image">
      <img v-lazy="goodsImage" width="100%">
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  props: ["goodsImage", "goodsName", "goodsPrice"],
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>

<style scoped>
.goods-info {
  background-color: aliceblue;
  border-radius: 10px;
  font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma, Hiragino Sans GB,
    STHeiti, Microsoft YaHei;
  color: #333;
  font-size: 0.7rem;
  box-shadow: 0 2px 8px 0  aliceblue;
}

.goods-image {
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
  border: 2px solid aliceblue;
}
.goods-name {
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-price {
  color: red;
  font-size: 0.8rem;
}
</style>