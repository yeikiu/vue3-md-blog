<template>
  <NavBar :sections="allSections" />
  <div class="container my-4 my-md-5">
    <span class="markdown-body" v-html="postHtml" v-bind:style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`" />
    <button type="button" v-bind:style="`color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`" @click="hasHistory() ? router.go(-1) : router.push('/')" class="border btn mt-4">&laquo; Back</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import router from '@/router'
import axios from 'redaxios'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import { PostIndex } from '@/types/PostIndex'
import patchMeta from '@/utils/patch_meta'
import NavBar from '@/components/NavBar.vue'

const { VUE_APP_MAIN_BG_CSS_COLOR = 'white', VUE_APP_MAIN_TEXT_CSS_COLOR = 'black' } = process.env

const markDownIt = new MarkdownIt({ html: true }).use(emoji)

export default defineComponent({
  components: {
    NavBar
  },
  props: {
    section: String,
    id: String
  },
  async setup (props) {
    onBeforeRouteUpdate(async (from, to, next) => {
      await next()
      location.reload()
    })
    const hasHistory = () => window.history?.length > 2
    const { data } = await axios.get('blog_store/posts_index.json')
    const postsCollection: PostIndex[] = data
    const { url } = postsCollection.find(({ id }) => id === props.id) || { url: '' }
    const { data: markDownSource } = await axios.get(url)
    const postHtml = markDownIt.render(markDownSource)
    const titleEl = markDownSource.split('#')
    if (titleEl[1]) patchMeta({ title: titleEl[1].trim() })

    return {
      hasHistory,
      postHtml,
      router,
      allSections: postsCollection.reduce((prev, { section }) => prev[section] ? { ...prev, [section]: prev[section] + 1 } : { ...prev, [section]: 1 }, { all: postsCollection.length } as Record<string, number>),
      VUE_APP_MAIN_BG_CSS_COLOR,
      VUE_APP_MAIN_TEXT_CSS_COLOR
    }
  }
})
</script>
