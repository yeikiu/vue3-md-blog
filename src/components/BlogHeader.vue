<template>
    <div class="text-center my-5">
        <p class="text-uppercase display-3" @click="router.push('/')">vue-base-blog</p>
        <img alt="Vue logo" src="@/assets/logo.png" @click="router.push('/')" />
    </div>
</template>

<script lang="ts">
import router from '@/router'

export default {
  setup () {
    return {
      router
    }
  }
}
</script>
