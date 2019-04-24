<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="text">
        <div>
          这个教程将全面讲解Vue+Koa的实战项目，学完本教程能成为以前端技术为主的全栈程序员。 这套课程总时长会超过20小时，每节课会控制在15分钟左右。
          文字版教程免费：一分钱不花你也可以学习全部内容，可能稍微辛苦一点。
          视频加辅导收费：预售阶段前500小伙伴188元（预售指技术胖录制视频过程中，每周更新3-4集，并提供每周一次的直播指导）。超过500名购买376元，在预售结束后，直播指导和群解答也不提供，视频会在CSDN学院上架出售。
          GitHub地址：https://github.com/shenghy/SmileVue
          涉及的技术栈包括：Vue+Router+Vant+Node+Koa2+Mongoose+MongoDB
          课程将从零开始搭建一个移动电商系统，包括首页展示，类别展示，购物功能，注册登录，积分系统，查找页面，后台接口设置。
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPreView: "auto",
        freeMode: true,
        mousewheel: true,
      }
    };
  },
  components: { swiper, swiperSlide }
};
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}

.text{
  font-size: 18px;
  text-align: left;
  padding: 30px;
  height: auto;
}
</style>