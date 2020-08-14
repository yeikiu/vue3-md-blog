<template>
  <div id="app" class="container">
    <Suspense>
      <router-view />
    </Suspense>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
})
</script>
