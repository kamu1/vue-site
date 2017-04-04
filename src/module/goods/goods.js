import Vue from 'vue'
import App from './components/goods.vue'
import 'assets/css/common/common.scss'
import './public.scss'
import './goods.scss'

import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
