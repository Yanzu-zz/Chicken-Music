import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

// 去除手机浏览器默认的点击 300ms 延迟
fastclick.attach(document.body)

Vue.use(VuelazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
