<template>
  <PatchMeta />
  <div id="app-wrapper">

    <NavBar :title="'📝 vue3-md-blog'" :sections="blogSections" />

    <div>
      <Suspense>
        <template #default>
          <router-view />
        </template>

        <template #fallback>
          <Loader />
        </template>
      </Suspense>
    </div>

    <Footer />

  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import PatchMeta from './components/PatchMeta.vue'
import Loader from './components/Loader.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'

const blogSections = inject('blogSections', {})
</script>

<style scoped>
#app-wrapper {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
