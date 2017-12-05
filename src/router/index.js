import Vue from 'vue'
import Router from 'vue-router'
import Carous from '@/components/Carous'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Carous
    },
    {
      path: '/Carous',
      name: 'Carous',
      component: Carous
    },
    {
      path: '/Works',
      name: '/Works',
      component: Works
    }
  ]
})
