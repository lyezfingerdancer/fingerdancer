import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: r =>
        require.ensure(
          [],
          () => r(require('@/App')),
          'index'
        )
    },
    {
        path: '/hello',
        component: r =>
          require.ensure(
            [],
            () => r(require('@/components/HelloWorld')),
            'hello'
          )
    }
  ]
})