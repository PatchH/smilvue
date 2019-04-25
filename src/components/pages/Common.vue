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
  background: url(https://img.alicdn.com/simba/img/TB1n4QrRxnaK1RjSZFBSuwW7VXa.jpg) no-repeat;
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