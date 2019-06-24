<template>
  <div class="container">
    <router-view/>

    <router-link to="/" class="my-5">
      <button type="button" class="mt-4 btn btn-outline-success">&laquo; Back</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
/* Custom SCSS here */

/deep/ {
  p {
    margin: 1.2rem 0;
    text-align: justify;
  }
}
</style>
