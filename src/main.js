import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});

Vue.config.productionTip = false

//设置超时时间
axios.defaults.timeout = 5000
//设置api地址
//全局定义axios
// axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api/'
// axios.defaults.baseURL = 'http://10.82.42.163:5001/api/'
// axios.defaults.baseURL = 'http://192.168.1.9:5001/api/'
// axios.defaults.baseURL = 'http://127.0.0.1:5001/api/'
axios.defaults.baseURL = 'http://43.138.21.182/api/'
Vue.prototype.$http = axios

// 图片服务器地址
// Vue.prototype.imgserver = 'http://shkjgw.shkjem.com/'
// Vue.prototype.imgserver = 'http://10.82.42.163:8000/image'
// Vue.prototype.imgserver = 'http://192.168.1.9:8000/image'
// Vue.prototype.imgserver = 'http://127.0.0.1:8000/image'
Vue.prototype.imgserver = 'http://43.138.21.182/image'

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');