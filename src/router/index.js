import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: resolve => require(['../components/common/Frame.vue'], resolve),
    children: [{
      path: '/',
      component: resolve => require(['../components/Index.vue'], resolve)
    }]
  },
  {
    path: '/admin',
    component: resolve => require(['../components/admin.vue'], resolve),
    children: [{
      path: '/',
      component: resolve => require(['../components/admin/index.vue'], resolve)
    },
    {
      path: 'write',
      component: resolve => require(['../components/admin/write.vue'], resolve)
    }
    ]
  },
  {
    path: '/login',
    component: resolve => require(['../components/client/login.vue'], resolve)
  }
  ]
})
