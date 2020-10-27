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

export const routerBase = process.env.BASE_URL

const router = createRouter({
  history: createWebHashHistory(routerBase),
  routes
})

export default router
