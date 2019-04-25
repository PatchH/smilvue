<template>
  <div id='shoppingMall'>
    <div class="search-bar">
      <van-row class="test-row" gutter="10">
        <van-col span="4">
          <div>
            <div>
              <img :src="locationIcon.scan">
            </div>
            <label>扫一扫</label>
          </div>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="4">
          <!-- <van-button size="small" class="search-button">查找</van-button> -->
          <div>
              <img :src="locationIcon.code">
            </div>
            <label>会员码</label>
        </van-col>
      </van-row>
    </div>
    <!--swipe area-->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--type bar-->
    <div class="type-bar">
      <div v-for="(cate,index) in catagory" :key="index" style="width:20%">
        <img :src="cate.image">
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
          <van-row gutter="10">
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
      locationIcon: {scan:require("../../assets/images/scan.svg"),code:require("../../assets/images/code.svg")},
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
#shoppingMall{
  padding-bottom: 50px
}

.search-bar {
  height: 3rem;
  background-color: #e5017d;
  line-height: 3rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.search-input {
  border-radius: 8px;
  width: 100%;
  height: 1.6rem;
  line-height: 3rem;
  border: 1px solid #fff;
  background-color: #fff;
  color: #fff;
  margin: .7rem 0;
}

.search-button {
  border-radius: 4px;
  margin: 0.4rem 0.5rem;
}

.test-row img {
  width: 50%;
  margin: .5rem auto .2rem auto;
  display: block;
}

.test-row label {
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  font-size: 0.6rem;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
  /* margin:0 0.3rem; */
  text-align: center;
  display: block;
}

.swiper-area {
  max-height: 15rem;
  clear: both;
  overflow: hidden;
  margin-top:3rem;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  display: flex;
  color: #5c5c5c;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
  text-align: center;
}

.type-bar img {
  width: 70%;
  padding: 15% 15% 0 15%;
}

.type-bar span:hover{
  color: #e5017d
}

.recommand-area {
  background-color: #fff;
  margin-top: 0.3rem;
}

.recommand-title {
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  padding: 0.2rem;
  color: #e5017d;
}

.recommand-body {
  border-bottom: 1px solid #eee;
}

.recommand-item {
  width: 100%;
  border-right: 1px solid #eee;
  font-size: 0.7rem;
  text-align: center;
  color: #333;
}

.hot-area {
  text-align: center;
  font-size: 0.9rem;
  height: 1.8rem;
  line-height: 1.8rem;

  bottom: 50px
}

.hot-title {
  text-align: center;
  font-size: 0.9rem;
  height: 1.8rem;
  line-height: 1.8rem;
  box-shadow: 0px 2px 8px 0 #ddd !important;

  background-color: #ddd;

  font-family: "Micorsoft YaHei";
  font-weight: bold;
}

.hot-goods {
  padding: 0 10px;
  padding-bottom: 60px
}

.hot-goods .van-col {
  padding-top: 10px;
}
</style>