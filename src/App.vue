<template>
  <PatchMeta />
  <NavBar
    :title="'📝 vue3-md-blog'"
    :sections="blogSections"
  />
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import PatchMeta from '@/components/PatchMeta.vue'
import Loader from '@/components/Loader.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default defineComponent({
  components: {
    PatchMeta,
    Loader,
    NavBar,
    Footer
  },
  setup () {
    const blogSections = inject('blogSections', {})
    return { blogSections }
  }
})
</script>
