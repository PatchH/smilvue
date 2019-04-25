// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Tabbar,TabbarItem,Button, Row, Col, Swipe, SwipeItem, List, Field, NavBar } from 'vant'

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(VueLazyLoad, {
    error: 'http://img.mp.itc.cn/upload/20161115/6163765431c44d538b37d6efb32ee885_th.jpg',
    loading: 'http://img.mp.itc.cn/upload/20161115/6163765431c44d538b37d6efb32ee885_th.jpg'
  }).use(VueAwesomeSwiper).use(List)
  .use(Field)
  .use(NavBar)
  .use(TabbarItem)
  .use(Tabbar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
