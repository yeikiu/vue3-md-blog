import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:section?',
    name: 'section',
    component: Home,
    props: true
  }, {
    path: '/:section/:id',
    name: 'post',
    component: Post,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
