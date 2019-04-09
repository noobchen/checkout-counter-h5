import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserInfo from './views/UserInfo'
import RuWang from './views/RuWang'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: UserInfo
    },
    {
      path: '/ruWangXingShi',
      name: 'ruWangXingshi',
      component: RuWang
    }
  ]
})
