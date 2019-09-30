import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/inedx/index'

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
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },{
      path: '/index/address',
      name: 'address',
      component: () => import('../views/inedx/components/index-address/Address')
    },{
      path: '/index/address/add',
      name: 'addDddress',
      component: () => import('../views/inedx/components/index-address/index-add-address/AddAddress')
    }
    ,{
      path: '/order',
      name: 'order',
      component: () => import('../views/order/index')
    },{
      path: '/info',
      name: 'Info',
      component: () => import('../views/info/Info')
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index')
    },{
      path: '/login/code',
      name: 'code',
      component: () => import('../views/login/components/login-code/Code')
    }
  ]
})
