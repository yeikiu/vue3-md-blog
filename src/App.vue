<template>
  <div id="app">
    <nav-bar />
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar'

export default {
  name: 'app',
  components: { NavBar },
}
</script>

<style scoped>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
  max-width: 90vw;
  margin: 0 auto;
}
</style>
