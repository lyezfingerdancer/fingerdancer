import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: r => require.ensure([],() => r(require('@/App')),'index')
    },
    {
      path: '/wall',
      component: r => require.ensure([],() => r(require('@/components/Wall')),'wall')
    },
    {
      path: '/about',
      component: r => require.ensure([],() => r(require('@/components/About')),'about')
    },
    {
      path: '/message',
      component: r => require.ensure([],() => r(require('@/components/Message')),'message')
    }
  ]
})