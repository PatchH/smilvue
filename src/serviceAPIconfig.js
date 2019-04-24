const BASEURL = "https://www.easy-mock.com/mock/5cabfad19e5b6c7b29b42dce/SmileVue/";

const LOCALURL = 'http://localhost:3000/'

const URL = {
    getShopMallInfo: BASEURL + 'index', // 商城首页数据
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: LOCALURL + 'user/register', //用户注册接口
    login:LOCALURL+'user/login',   //用户登录接口
}

module.exports = URL