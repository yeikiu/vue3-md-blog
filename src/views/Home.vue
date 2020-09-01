<template>
    <PatchMeta :title="section ? section : 'Minimal Vue3 + Markdown blog engine'" />
    <NavBar :sections="allSections" />

    <div v-bind:style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`">
      <!-- HEADER -->
      <BlogHeader class="markddown-body mb-5"></BlogHeader>

      <hr v-if="section" />
      <p v-if="section" class="text-center display-4 text-capitalize my-5">{{section}}</p>

      <div class="container p-3 p-md-4" v-for="entry in activePosts" :key="entry.id">

        <!-- TITLE -->
        <router-link :to="{ path:`/${entry.section}/${entry.id}` }" class="text-reset">
          <h3 class="text-left m-0 p-0">
            {{entry.title}}
          </h3>
        </router-link>

        <!-- POST DETAILS -->
        <p class="font-weight-light font-italic m-0 p-0" :class="!section ? 'text-right':'mb-3'">{{entry.date}}</p>
        <a v-if="!section" :href="`#/${entry.section}`" class="text-reset">
          <h6 class="m-0 p-0 text-right" style="cursor: pointer;">
            #{{entry.section}}
          </h6>
        </a>

        <!-- POST INTRO -->
        <p class="font-weight-light text-justify mt-1">{{entry.description}}</p>
      </div>

      <!-- PAGINATION -->
      <ul v-if="endPage > startPage" class="pagination justify-content-center mb-5 pb-5" style="cursor: pointer;">
        <li class="page-item" v-bind:class="currentPage == startPage ? 'active':''" @click="currentPage = startPage">
          <a class="page-link"> {{startPage}}</a>
        </li>
        <li class="page-item" v-bind:class="currentPage == page ? 'active':''" v-for="(page, index) in midPages" :key="index" @click="currentPage = page">
          <a class="page-link">{{page}}</a>
        </li>
        <li class="page-item" v-bind:class="currentPage == endPage ? 'active':''" @click="currentPage = endPage">
          <a class="page-link">{{endPage}}</a>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import axios from 'redaxios'
import BlogHeader from '@/components/BlogHeader.vue'
import PatchMeta from '@/components/PatchMeta.vue'
import NavBar from '@/components/NavBar.vue'
import paginate from '@/utils/paginate'
import { PostIndex } from '@/types/PostIndex'

const { VUE_APP_POSTS_PER_PAGE = 5, VUE_APP_MAIN_BG_CSS_COLOR = 'white', VUE_APP_MAIN_TEXT_CSS_COLOR = 'black' } = process.env
console.log({ VUE_APP_POSTS_PER_PAGE, VUE_APP_MAIN_BG_CSS_COLOR, VUE_APP_MAIN_TEXT_CSS_COLOR })

export default defineComponent({
  components: {
    PatchMeta,
    BlogHeader,
    NavBar
  },
  props: {
    section: String
  },
  async setup (props) {
    onBeforeRouteUpdate(async (from, to, next) => {
      await next()
      location.reload()
    })

    const { data } = await axios.get('blog_store/posts_index.json')
    const postsCollection: PostIndex[] = data
    const state = reactive({
      currentPage: 1,
      startPage: 1,
      endPage: 1,
      midPages: [1]
    })

    const activePosts = computed(() => {
      const postsFiltered = props.section ? postsCollection.filter(({ section }) => section === props.section) : postsCollection
      const { startPage, endPage, startIndex, endIndex } = paginate(postsFiltered.length, state.currentPage, VUE_APP_POSTS_PER_PAGE)
      state.startPage = startPage
      const prev = state.currentPage - 1 >= startPage ? state.currentPage - 1 : 0
      const next = state.currentPage + 1 <= endPage ? state.currentPage + 1 : 0
      state.midPages = [prev, state.currentPage, next].filter(p => p > startPage && p < endPage)
      state.endPage = endPage
      return postsFiltered.slice(startIndex, endIndex + 1)
    })

    return {
      ...toRefs(state),
      activePosts,
      allSections: postsCollection.reduce((prev, { section }) => prev[section] ? { ...prev, [section]: prev[section] + 1 } : { ...prev, [section]: 1 }, { all: postsCollection.length } as Record<string, number>),
      VUE_APP_MAIN_BG_CSS_COLOR,
      VUE_APP_MAIN_TEXT_CSS_COLOR
    }
  }
})
</script>
