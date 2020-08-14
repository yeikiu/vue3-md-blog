<template>
  <div id="app" class="container">
    <Suspense>
      <template #default>
        <router-view />
        <Footer></Footer>
      </template>
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Spinner from '@/components/Spinner.vue'
import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default {
  name: 'App',
  components: {
    Spinner,
    Footer
  }
}
</script>
