<template>
  <div class="blog">
    <router-view />
    <router-link to="/">
      <button type="button" class="mt-3 btn btn-outline-success">
        &laquo; Back
      </button>  
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  max-width: 50vw;
  margin: 10rem auto;
  /deep/ {
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
</style>
