<template>
  <PatchMeta :title="title" />
  <div class="container my-4 my-md-5">
    <v-md-editor mode="preview" v-model="markDownSource" :style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`"></v-md-editor>
    <button type="button" :style="`color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`" class="border btn mt-4"
      @click="hasHistory() ? router.go(-1) : router.push('/')">
      &laquo; Back
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import router from '../router'
import axios from 'redaxios'
import { PostIndex } from '../types/PostIndex'
import PatchMeta from '../components/PatchMeta.vue'
import blogConfig from '../blog_config'

const { VUE_APP_MAIN_BG_CSS_COLOR, VUE_APP_MAIN_TEXT_CSS_COLOR } = blogConfig

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

/* Hacky navigation when a href link is clicked within the compiled html Post */
onBeforeRouteUpdate(() => {
  location.reload()
})

// Fetch Post markdown and compile it to html
const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', [])
const { url = '' } = postsIndex.find(({ id }) => id === props.id) || {}
const { data: markDownSource } = await axios.get(url)

// Patch page title
const [, title] = markDownSource.split('#')

// Back button helper
const hasHistory = () => window.history?.length > 2
</script>
