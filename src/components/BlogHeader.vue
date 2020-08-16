<template>
    <div class="text-center my-5">
      <a href="/" class="text-reset">
        <p class="text-uppercase display-3" style="cursor: pointer;">vue-base-blog</p>
        <img alt="Vue logo" src="@/assets/logo.png" style="cursor: pointer;" />
       </a>
    </div>
</template>

<script language="ts">
import { onBeforeRouteUpdate } from 'vue-router'

export default {
  setup () {
    onBeforeRouteUpdate(async (from, to, next) => {
      await next()
      location.reload()
    })
  }
}
</script>
