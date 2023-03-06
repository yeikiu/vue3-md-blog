import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'redaxios'
import { PostIndex } from './types/PostIndex'

import VueMarkdownEditor from '@kangc/v-md-editor'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import enUS from '@kangc/v-md-editor/lib/lang/en-US'

import Prism from 'prismjs'
import "prismjs/components/prism-typescript"

import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

VueMarkdownEditor.lang.use('en-US', enUS);
VueMarkdownEditor.xss.extend({
  // extend white list
  whiteList: {
    source: [],
    iframe: ['width', 'height', 'src', 'frameborder', 'allow', 'allowfullscreen'],
  },
});
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const dataPath = 'blog_store/posts_index.json'

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(dataPath)
  const blogSections: Record<string, number> = postsIndex.reduce((prev, { section }) => prev[section] ? { ...prev, [section]: prev[section] + 1 } : { ...prev, [section]: 1 }, { all: postsIndex.length } as Record<string, number>)

  createApp(App)
    .use(router)
    .use(VueMarkdownEditor)
    .provide<PostIndex[]>('postsIndex', postsIndex)
    .provide<Record<string, number>>('blogSections', blogSections)
    .mount('#app')
}

loadApp()
