<template>
    <div class="fixed-bottom text-center bg-secondary text-white mt-5 py-2">
        <router-link :to="{ path: '' }" class="text-reset">
          <p class="m-0 p-0">vue-base-blog v{{version}}</p>
        </router-link>
        <p class="m-0 p-0">Created with ❤️ by <a href="https://github.com/yeikiu/" target="_blank" class="text-reset">JQ</a> © {{ new Date().toDateString().slice(-4) }}</p>
    </div>
</template>

<script language="ts">
import { version } from '@/../package.json'

export default {
  setup () {
    return {
      version
    }
  }
}
</script>
