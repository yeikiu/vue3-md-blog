<template>
    <div class="text-center my-5">
      <p class="text-uppercase display-3" @click="toHome" style="cursor: pointer;">vue-base-blog</p>
      <img alt="Vue logo" src="@/assets/logo.png" @click="toHome" style="cursor: pointer;" />
    </div>
</template>

<script language="ts">
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
      toHome
    }
  }
}
</script>
