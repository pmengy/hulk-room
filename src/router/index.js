import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  { path: '/', redirect: '/home' },
  { path: '/city', component: () => import('@/views/city') },
  { path: '/favorite', component: () => import('@/views/favorite') },
  { path: '/rent', component: () => import('@/views/rent') },
  { path: '/detail', component: () => import('@/views/rent') },
  {
    path: '/home',
    component: () => import('@/views/layout'),
    children: [
      { path: '', component: () => import('@/views/home') },
      { path: 'profile', component: () => import('@/views/my') },
      { path: 'list', component: () => import('@/views/find') },
      { path: 'news', component: () => import('@/views/news') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
