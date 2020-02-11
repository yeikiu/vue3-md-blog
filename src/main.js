require('dotenv').config()
const {
  VUE_APP_POSTS_PER_PAGE
} = process.env;

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'github-markdown-css/github-markdown.css'

import ForkeMeOnGithub from 'fork-me-on-github-vue';

// Fetch index file
const fetchPostsIndex = async() => {
  return (await axios.get('data/posts_index.json')).data
}

const loadApp = async() => {
  Vue.config.productionTip = false
  Vue.use(BootstrapVue)
  Vue.use(Vuex)
  Vue.use(Router)
  Vue.use(ForkeMeOnGithub)

  const postsIndex = await fetchPostsIndex();
  const store = new Vuex.Store({
    state: {
      postsIndex,
      VUE_APP_POSTS_PER_PAGE
    }
  });

  console.log({VUE_APP_POSTS_PER_PAGE});

  const router = new Router({
    mode: 'hash',
    //base: '/',
    routes: [
      {
        path: '/:section?',
        name: 'home',
        component: () => import('./views/Home.vue'),
        props: true,
      }, {
        path: '/:section/:id',
        name: 'post',
        component: () => import('./views/Post.vue'),
        props: true,
      }
    ]
  });

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

loadApp();
