<template>
  <div id="app" class="container">
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
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default {
  name: 'App',
  components: {
    Loader,
    Footer
  }
}
</script>
