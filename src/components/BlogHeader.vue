<template>
    <div class="text-center my-5">
      <p class="text-uppercase display-3" @click="router.push('/')" style="cursor: pointer;">vue-base-blog</p>
      <img alt="Vue logo" src="@/assets/logo.png" @click="router.push('/')" style="cursor: pointer;" />
    </div>
</template>

<script language="ts">
import router from '@/router'

export default {
  setup () {
    return {
      router
    }
  }
}
</script>
