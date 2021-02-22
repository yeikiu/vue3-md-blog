<template>
  <PatchMeta :title="title" />
  <div class="container my-4 my-md-5">
    <span
      class="markdown-body"
      :style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`"
      v-html="postHtml"
    />
    <button
      type="button"
      :style="`color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`"
      class="border btn mt-4"
      @click="hasHistory() ? router.go(-1) : router.push('/')"
    >
      &laquo; Back
    </button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, inject } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import router from '@/router'
import axios from 'redaxios'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import { PostIndex } from '@/types/PostIndex'
import PatchMeta from '@/components/PatchMeta.vue'

const { VUE_APP_MAIN_BG_CSS_COLOR = 'white', VUE_APP_MAIN_TEXT_CSS_COLOR = 'black' } = process.env

const markDownIt = new MarkdownIt({ html: true }).use(emoji)

export default defineComponent({
  components: {
    PatchMeta
  },
  props: {
    section: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  async setup (props) {
    /* Hacky navigation when a href link is clicked within the compiled html Post */
    onBeforeRouteUpdate(() => {
      location.reload()
    })

    // Fetch Post markdown and compile it to html
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', [])
    const { url = '' } = postsIndex.find(({ id }) => id === props.id) || {}
    const { data: markDownSource } = await axios.get(url)
    const postHtml = markDownIt.render(markDownSource)

    // Patch page title
    const [, title] = markDownSource.split('#')

    // Back button helper
    const hasHistory = () => window.history?.length > 2

    return {
      hasHistory,
      postHtml,
      router,
      title,
      VUE_APP_MAIN_BG_CSS_COLOR,
      VUE_APP_MAIN_TEXT_CSS_COLOR
    }
  }
})
</script>
