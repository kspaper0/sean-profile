import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@/components/layouts/TheProfile')
  // },
  // {
  //   path:'/projects',
  //   name: 'Projects',
  //   component: () => import('@/components/layouts/TheProjects')
  // },
  // {
  //   path:'/skills',
  //   name: 'Skills',
  //   component: () => import('@/components/layouts/TheSkills')
  // },
  // {
  //   path: '*',
  //   redirect: '/'
  // },
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
