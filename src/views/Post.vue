<template>
  <div class="post my-2 py-5">
    <button type="button" @click="hasHistory() ? router.go(-1) : router.push('/')" class="my-5 btn btn-outline-success">&laquo; Back</button>
    <span class="markdown-body" v-html="postHtml" />
    <button type="button" @click="hasHistory() ? router.go(-1) : router.push('/')" class="my-5 btn btn-outline-success">&laquo; Back</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import router from '@/router'
import axios from 'redaxios'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import { PostIndex } from '@/types/PostIndex'

const markDownIt = new MarkdownIt({ html: true }).use(emoji)

export default defineComponent({
  name: 'post',
  props: {
    section: String,
    id: String
  },
  async setup (props) {
    const hasHistory = () => window.history?.length > 2
    const { data } = await axios.get('blog_store/posts_index.json')
    const postsCollection: PostIndex[] = data
    const { url } = postsCollection.find(({ id }) => id === props.id) || { url: '' }
    const { data: markDownSource } = await axios.get(url)
    const postHtml = markDownIt.render(markDownSource)

    return {
      hasHistory,
      postHtml,
      router
    }
  }
})
</script>
