<template>
  <div id="app" class="m-5">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 /* Custom SCSS here */
 #app {
  /deep/ {
    h3 {
      color: #42b883;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: .2rem;
      color: #42b883;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
  }
}

.container {
  max-width: 65vw;
  margin: 0 auto;
}
</style>
