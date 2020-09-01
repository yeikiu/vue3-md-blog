<template>
  <PatchMeta />
  <div id="app">
    <Suspense>
      <template #default>
        <router-view />
        <Footer></Footer>
      </template>
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
import PatchMeta from '@/components/PatchMeta.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default {
  components: {
    Loader,
    Footer,
    PatchMeta
  }
}
</script>
