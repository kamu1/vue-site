import Vue from 'vue'
import VueRouter from 'vue-router'

import M1 from './module1/module1'
import M2 from './module1/module2'

Vue.use(VueRouter)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'hash',
  // base: baseUrl,
  routes: [
    {
      path: '/demo',
      component: M1,
      children: [
        {
          path: '/m2',
          component: M2
        }
      ]
    },
    {
      path: '/demo/:id',
      component: M2
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #index 匹配的元素上。
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#index')
