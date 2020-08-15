<template>
  <div class="fixed-bottom text-center bg-secondary text-white mt-5 py-2">
    <p class="m-0 p-0" @click="toHome" style="cursor: pointer;">vue-base-blog v{{version}}</p>
    <p class="m-0 p-0">Created with ❤️ by <a href="https://github.com/yeikiu/" target="_blank" class="text-reset">JQ</a> © {{ new Date().toDateString().slice(-4) }}</p>
  </div>
</template>

<script language="ts">
import { version } from '@/../package.json'
import router from '@/router'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const toHome = ref()
    onMounted(() => {
      toHome.value = async () => {
        await router.push('/')
        location.reload()
      }
    })
    return {
      version,
      toHome
    }
  }
}
</script>
