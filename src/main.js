// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import 'static/js/rem'
import 'static/css/demo.css'
import 'static/css/iconfont.css'
import 'static/css/swiper.min.css'
import 'static/js/swiper.min.js'
import 'static/js/jquery-1.9.1.min.js'
import store from '@/store/store'
import echarts from 'echarts'
import axios from 'axios'
import 'static/css/edit.css'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
