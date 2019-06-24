import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import axios from 'axios'

const getBlogRoutes = (BlogEntries) => {
  const routes = [];
  const sections = Object.keys(BlogEntries);
  
  sections.forEach(section => {
    const children = [{
      path: `/:section/:mdURL`,
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
  return (await axios.get('https://raw.githubusercontent.com/yeikiu/vue-base-blog/master/data/posts_index.json')).data
}

const loadApp = async() => {
  Vue.config.productionTip = false
  Vue.use(Vuex)
  Vue.use(Router)

  const postsIndex = await fetchPostsIndex();
  const store = new Vuex.Store({
    state: {
      postsIndex
    }
  });

  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
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
