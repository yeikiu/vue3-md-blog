import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:section?',
    name: 'home',
    component: Home,
    props: true
  }, {
    path: '/:section/:id',
    name: 'post',
    component: Post,
    props: true
  }
]

const { DIST_PUBLIC_PATH = '' } = process.env

const router = createRouter({
  history: createWebHashHistory(DIST_PUBLIC_PATH),
  routes
})

export default router
