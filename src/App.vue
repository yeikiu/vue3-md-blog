<template>
  <div id="app" class="container text-center">
    <Suspense>
      <router-view />
    </Suspense>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
})
</script>

<style>

</style>
