import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: function () {
        return import('./views/UserInfo')
      }
    },
    {
      path: '/ruWangXingShi',
      name: 'ruWangXingshi',
      component: function () {
        return import('./views/RuWang')
      }
    },
    {
      path: '/shoppingunit',
      name: 'shoppingunit',
      component: function () {
        import('./views/Shoppingunit')
      }
    },
    {
      path: '/shoppingunitOne',
      name: 'shoppingunitOne',
      component: function () {
        return import('./views/ShoppingunitOne')
      }
    },
    {
      path: '/shoppingunitTwo',
      name: 'shoppingunitTwo',
      component: function () {
        return import('./views/ShoppingunitTwo')
      }
    }
  ]
})
