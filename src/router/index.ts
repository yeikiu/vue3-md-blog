import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

const { NODE_ENV = 'development', DIST_PUBLIC_PATH } = process.env

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

const router = createRouter({
  history: NODE_ENV === 'production' ? createWebHashHistory(`/${DIST_PUBLIC_PATH}/`) : createWebHashHistory(),
  routes
})

export default router
