<template>
  <div class="floor">
    <div class="floor-title" v-text="floorTitle"></div>
    <div class="floor-anormaly">
      <div class="floor-one">
        <img :src="floorData0.image" width="100%">
      </div>
      <div class="floor-two">
        <div>
          <img :src="floorData1.image" width="100%" style="border-bottom:1px solid #ddd">
        </div>
        <div>
          <img :src="floorData2.image" width="100%">
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item,index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["floorData", "floorTitle"],
  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {},
    };
  },
  created() {},
  watch: {
    floorData: function(val) {
      this.floorData0 = this.floorData[0];
      this.floorData1 = this.floorData[1];
      this.floorData2 = this.floorData[2];
      
      
    }
  }
};
</script>

<style scoped>
.floor-title {
  text-align: center;
  font-size: .9rem;
  height: 1.8rem;
  line-height: 1.8rem;
  box-shadow: 0px 2px 8px 0 #ddd !important;

  background-color: #ddd;

  font-family: 'Micorsoft YaHei';
  font-weight: bold;
}

.floor-anormaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.floor-anormaly div {
  width: 8rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.floor-one {
  border-right: 1px solid #ddd;
}

.floor-two {
  border-right: 1px solid #ddd;
}

.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}

.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 8rem;
  border-bottom: 1px solid #ddd;
}

.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>