require('dotenv').config()
const { 
  VUE_APP_POSTS_INDEX_URL,
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

const getBlogRoutes = (BlogEntries) => {
  const routes = [];
  const sections = Object.keys(BlogEntries);
  
  sections.forEach(section => {
    const children = [{
      path: `/:section/:id`,
      component: () => import('./views/Post.vue'),
      props: true
    }];

    routes.push({
      path: `/${section}`,
      component: () => import('./views/Blog.vue'),
      children
    });
  });

  return routes;
}

// Fetch index file
const fetchPostsIndex = async() => {
  return (await axios.get(VUE_APP_POSTS_INDEX_URL)).data
}

const loadApp = async() => {
  Vue.config.productionTip = false
  Vue.use(BootstrapVue)
  Vue.use(Vuex)
  Vue.use(Router)

  const postsIndex = await fetchPostsIndex();
  const store = new Vuex.Store({
    state: {
      postsIndex,
      VUE_APP_POSTS_PER_PAGE
    }
  });

  const router = new Router({
    mode: 'hash',
    //base: '/',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
      },
      ...getBlogRoutes(postsIndex)
    ]
  });

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

loadApp();
