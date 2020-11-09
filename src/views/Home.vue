<template>
    <PatchMeta :title="section ? section : 'Minimal Vue3 + Markdown blog engine'" />

    <div v-bind:style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`">
      <!-- HEADER -->
      <BlogHeader class="mb-5"></BlogHeader>

      <hr v-if="section" />
      <p v-if="section" class="text-center display-4 text-capitalize my-5">{{section}}</p>

      <div class="container markdown-body p-3 p-md-4" v-for="entry in visiblePosts" :key="entry.id">

        <!-- TITLE -->
        <router-link :to="`/${entry.section}/${entry.id}`" class="text-reset">
          <h3 class="text-left m-0 p-0">
            {{entry.title}}
          </h3>
        </router-link>

        <!-- POST DETAILS -->
        <p class="font-weight-light font-italic m-0 p-0" :class="!section ? 'text-right':'mb-3'">{{entry.date}}</p>
        <router-link v-if="!section" :to="`/${entry.section}`" class="text-reset">
          <h6 class="m-0 p-0 text-right font-weight-bold">
            #{{entry.section}}
          </h6>
        </router-link>

        <!-- POST INTRO -->
        <p class="font-weight-light mt-1">{{entry.description}}</p>
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
import { defineComponent, reactive, toRefs, computed, inject } from 'vue'
import BlogHeader from '@/components/BlogHeader.vue'
import PatchMeta from '@/components/PatchMeta.vue'
import paginate from '@/utils/paginate'
import { PostIndex } from '@/types/PostIndex'

const { VUE_APP_POSTS_PER_PAGE = 5, VUE_APP_MAIN_BG_CSS_COLOR = 'white', VUE_APP_MAIN_TEXT_CSS_COLOR = 'black' } = process.env

export default defineComponent({
  components: {
    PatchMeta,
    BlogHeader
  },
  props: {
    section: String
  },
  setup (props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', [])
    const state = reactive({
      currentPage: 1,
      startPage: 1,
      endPage: 1,
      midPages: [1]
    })

    const visiblePosts = computed(() => {
      const computedVisiblePosts = props.section ? postsIndex.filter(({ section }) => section === props.section) : postsIndex
      const { startPage, endPage, startIndex, endIndex } = paginate(computedVisiblePosts.length, state.currentPage, VUE_APP_POSTS_PER_PAGE)
      state.startPage = startPage
      const prev = state.currentPage - 1 >= startPage ? state.currentPage - 1 : 0
      const next = state.currentPage + 1 <= endPage ? state.currentPage + 1 : 0
      state.midPages = [prev, state.currentPage, next].filter(p => p > startPage && p < endPage)
      state.endPage = endPage
      return computedVisiblePosts.slice(startIndex, endIndex + 1)
    })

    return {
      ...toRefs(state),
      visiblePosts,
      VUE_APP_MAIN_BG_CSS_COLOR,
      VUE_APP_MAIN_TEXT_CSS_COLOR
    }
  }
})
</script>
