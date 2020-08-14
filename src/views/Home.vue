<template>

    <!-- HEADER -->
    <BlogHeader class="markddown-body mb-5"></BlogHeader>

    <p v-if="section" class="text-center display-4 text-capitalize my-5">{{section}}</p>

    <div class="text-right mb-5 mx-lg-4 px-lg-4" v-for="entry in activePosts" :key="entry.id">
      <!-- TITLE -->
      <h3 class="text-left m-0 p-0 link" @click="router.push(`/${entry.section}/${entry.id}`)">
        {{entry.title}}
      </h3>

      <!-- POST DETAIL -->
      <p class="text-muted m-0 p-0">{{entry.date}}</p>
      <h6 v-if="!section" class="m-0 p-0 link" @click="router.push(`/${entry.section}`)">
        #{{entry.section}}
      </h6>

      <!-- POST INTRO -->
      <p class="font-weight-light text-left text-justify mt-1">{{entry.description}}</p>
    </div>

    <!-- PAGINATION -->
    <ul v-if="endPage > startPage" class="pagination justify-content-center mb-5 pb-5">
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
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import router from '@/router'
import axios from 'redaxios'
import BlogHeader from '@/components/BlogHeader.vue'
import paginate from '@/utils/paginate'
import { PostIndex } from '@/types/PostIndex'

const PAGE_SIZE = 4

export default defineComponent({
  name: 'Home',
  components: {
    BlogHeader
  },
  props: {
    section: String
  },
  async setup () {
    const { data } = await axios.get('blog_store/posts_index.json')
    const postsCollection: PostIndex[] = data

    const state = reactive({
      currentPage: 1,
      startPage: 1,
      endPage: 1,
      midPages: [1]
    })

    const activePosts = computed(() => {
      const { startPage, endPage, startIndex, endIndex } = paginate(postsCollection.length, state.currentPage, PAGE_SIZE)
      state.startPage = startPage
      const prev = state.currentPage - 1 >= startPage ? state.currentPage - 1 : 0
      const next = state.currentPage + 1 <= endPage ? state.currentPage + 1 : 0
      state.midPages = [prev, state.currentPage, next].filter(p => p > startPage && p < endPage)
      state.endPage = endPage
      return postsCollection.slice(startIndex, endIndex + 1)
    })

    return {
      ...toRefs(state),
      activePosts,
      router
    }
  }
})
</script>
