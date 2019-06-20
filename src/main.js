import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    currentPost: `
# This is a test
## Heading 2
_lorem ipsum_ dolor __amet__`
  },
  mutations: {
    updateStorePost (state, post) {
      state.currentPost = post
    }
  },
  actions: {
    fetchPost ({ commit }, url) {
      console.log('fetchPost', url)
      axios.get(url).then((response, error) => {
        commit('updateStorePost', response.data)
      }); 
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
