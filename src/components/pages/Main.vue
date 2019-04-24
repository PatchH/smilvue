<template>
  <div>
    <div class="main-div">
      <router-view/>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" @click="changeTabbar(1)">首页</van-tabbar-item>
      <van-tabbar-item icon="records" @click="changeTabbar(2)">列表</van-tabbar-item>
      <van-tabbar-item icon="cart" @click="changeTabbar(3)">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="changeTabbar(4)">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {
    changeTabbar(active) {
      switch (active) {
        case 1:
          this.$router.push({ path: "/" });
          break;
        case 2:
          this.$router.push("/Common");
          break;
        case 3:
          this.$router.push({ name: "Common" });
          break;
        case 4:
          this.$router.push({ name: "Common" });
          break;
      }
    }
  }
};
</script>

<style scoped>
.van-tabbar {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  /* background-color:honeydew; */
}

.van-tabbar-item {
  color: #333;
  font-size: 0.7rem;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
}
</style>