import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import region from '@/view/region'
import editor from '@/view/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/region',
      name: 'region',
      component: region
    }
  ]
})
