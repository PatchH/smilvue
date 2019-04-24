<template>
  <div>
    <div class="search-bar">
      <van-row class="test-row">
        <van-col span="3">
          <img :src="locationIcon" width="75%" style="padding:3px">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!--swipe area-->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--type bar-->
    <div class="type-bar">
      <div v-for="(cate,index) in catagory" :key="index" style="width:20%">
        <img v-lazy="cate.image" width="90%">
        <span v-text="cate.mallCategoryName"></span>
      </div>
    </div>
    <!--adBanner BAR-->
    <div>
      <img v-lazy="adBanner" width="100%">
    </div>
    <!--Recommand goods area-->
    <div class="recommand-area">
      <div class="recommand-title">商品推荐</div>
      <div class="recommand-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommandGoods" :key="index">
            <div class="recommand-item">
              <img :src="item.image" width="80%">
              <div v-text="item.goodsName"></div>
              <div>¥ {{item.price | moneyFilter}} (¥ {{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--floor -->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(good,index) in hotGoods" :key="index">
              <goodsInfo :goodsImage="good.image" :goodsName="good.name" :goodsPrice="good.price"></goodsInfo>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floorComponent from "../component/floorComponent";
import { toMoney } from "../../filter/moneyFilter.js";
import goodsInfo from "../component/goodsInfoComponent";
import url from "@/serviceAPIconfig.js";
export default {
  data() {
    return {
      msg: "Shopping Mall",
      locationIcon: require("../../assets/images/location.svg"),
      bannerPicArray: [
        {
          imageUrl:
            "https://img.alicdn.com/tps/i4/TB1DvRkPwHqK1RjSZFPSuwwapXa.jpg_q90_.webp"
        },
        {
          imageUrl:
            "https://img.alicdn.com/simba/img/TB1vaxrMmzqK1RjSZPxSuw4tVXa.jpg"
        },
        {
          imageUrl:
            "https://img.alicdn.com/simba/img/TB1uuy6LAzoK1RjSZFlSuui4VXa.jpg"
        }
      ],
      catagory: [],
      adBanner: [],
      recommandGoods: [],
      swiperOption: { slidesPerView: 3 },
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: []
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  created() {
    axios({
      url: url.getShopMallInfo,
      method: "get"
    })
      .then(Response => {
        if (Response.status == 200) {
          let data = Response.data.data;
          this.catagory = data.category;
          console.log(data);
          this.adBanner = data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = data.slides;
          this.recommandGoods = data.recommend;
          this.floor1 = data.floor1;
          this.floor2 = data.floor2;
          this.floor3 = data.floor3;
          this.floorName = data.floorName;
          this.hotGoods = data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}

.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #fff;
  background-color: #e5017d;
  color: #fff;
}

.search-button {
  border-radius: 4px;
  margin: 0 0.5rem !important;
}

.swiper-area {
  max-height: 15rem;
  clear: both;
  overflow: hidden;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.5rem;
  border-radius: 0.3rem;
  font-size: .5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  text-align: center
}

.recommand-area {
  background-color: #fff;
  margin-top: 0.3rem;
}

.recommand-title {
  border-bottom: 1px solid #eee;
  font-size: .5rem;
  padding: 0.2rem;
  color: #e5017d;
}

.recommand-body {
  border-bottom: 1px solid #eee;
}

.recommand-item {
  width: 100%;
  border-right: 1px solid #eee;
  font-size: .4rem;
  text-align: center;
}

.hot-area {
  text-align: center;
  font-size: .5rem;
  height: 1.8rem;
  line-height: 1.8rem;
}

.hot-title {
  text-align: center;
  font-size: .5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  box-shadow: 0px 2px 8px 0 #ddd !important;

  background-color: #ddd;

  font-family: "Micorsoft YaHei";
  font-weight: bold;
}
</style>