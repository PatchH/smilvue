<template>
  <div>
    <div>
      <router-view/>
    </div>
    <div class="main-div">暂无数据，敬请期待！</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {}
};
</script>

<style scoped>
.main-div {
  width: 100%;
  background: url(http://img.mp.itc.cn/upload/20161115/6163765431c44d538b37d6efb32ee885_th.jpg) no-repeat;
  height: 600px;
  background-position: center 100%;
  background-size: 100% 92%;
  background-color: bisque;
  text-align: center;
  color: #333;
  font-size: 1rem;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
}
</style>