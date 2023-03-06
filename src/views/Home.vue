<template>
  <PatchMeta :title="section ? section : 'Minimal Vue3 + Markdown blog engine'" />

  <div :style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`">
    <!-- HEADER -->
    <BlogHeader class="mb-5" />

    <hr v-if="section">
    <p
      v-if="section"
      class="text-center display-4 text-capitalize my-5"
    >
      {{ section }}
    </p>

    <div
      v-for="entry in pageStatus.visiblePosts"
      :key="entry.id"
      class="container markdown-body p-3 p-md-4"
    >
      <!-- TITLE -->
      <router-link
        :to="`/${entry.section}/${entry.id}`"
        class="text-reset"
      >
        <h3 class="text-left m-0 p-0">
          {{ entry.title }}
        </h3>
      </router-link>

      <!-- POST DETAILS -->
      <p
        class="font-weight-light font-italic m-0 p-0"
        :class="!section ? 'text-right':'mb-3'"
      >
        {{ entry.date }}
      </p>
      <router-link
        v-if="!section"
        :to="`/${entry.section}`"
        class="text-reset"
      >
        <h6 class="m-0 p-0 text-right font-weight-bold">
          #{{ entry.section }}
        </h6>
      </router-link>

      <!-- POST INTRO -->
      <p class="font-weight-light mt-1">
        {{ entry.description }}
      </p>
    </div>

    <!-- PAGINATION -->
    <ul
      v-if="pageStatus.endPage > pageStatus.startPage"
      class="pagination justify-content-center mb-5 pb-5"
      style="cursor: pointer;"
    >
      <li
        class="page-item"
        :class="currentPage == pageStatus.startPage ? 'active':''"
        @click="currentPage = pageStatus.startPage"
      >
        <a class="page-link"> {{ pageStatus.startPage }}</a>
      </li>
      <li
        v-for="(page, index) in pageStatus.midPages"
        :key="index"
        class="page-item"
        :class="currentPage == page ? 'active':''"
        @click="currentPage = page"
      >
        <a class="page-link">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="currentPage == pageStatus.endPage ? 'active':''"
        @click="currentPage = pageStatus.endPage"
      >
        <a class="page-link">{{ pageStatus.endPage }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import BlogHeader from '../components/BlogHeader.vue'
import PatchMeta from '../components/PatchMeta.vue'
import paginate from '../utils/paginate'
import { PostIndex } from '../types/PostIndex'
import blogConfig from '../blog_config'

const { VUE_APP_POSTS_PER_PAGE, VUE_APP_MAIN_BG_CSS_COLOR, VUE_APP_MAIN_TEXT_CSS_COLOR } = blogConfig

const props = defineProps({
  section: {
    type: String,
    default: ''
  }
})

const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', [])
const currentPage = ref(1)

const pageStatus = computed(() => {
  const categoryPosts = props.section ? postsIndex.filter(({ section }) => section === props.section) : postsIndex
  const { startPage, endPage, startIndex, endIndex } = paginate(categoryPosts.length, currentPage.value, VUE_APP_POSTS_PER_PAGE)
  const prev = currentPage.value - 1 >= startPage ? currentPage.value - 1 : 0
  const next = currentPage.value + 1 <= endPage ? currentPage.value + 1 : 0
  const midPages = [prev, currentPage.value, next].filter(p => p > startPage && p < endPage)

  const visiblePosts = categoryPosts.slice(startIndex, endIndex + 1)

  return {
    startPage,
    midPages,
    endPage,
    visiblePosts
  }
})
</script>
