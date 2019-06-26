<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container mx-lg-5 px-lg-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import navBar from "@/components/navBar.vue";

  export default {
    components: {
      navBar
    }
  }
</script>

<style lang="scss" scoped>
 /* Custom SCSS here */
 
/deep/ {
  h1, h3 {
    color: #42b883;
    font-weight: normal;
  }
  
  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .post img {
    max-width: 35%;
    vertical-align: middle;
    border: 0;
  }

  .post iframe {
    max-width: 95%;
    vertical-align: middle;
    border: 0;
  }

  .post p {
    font-weight: lighter;
    margin: 1.2rem 0;
    text-align: justify;
  }
  .post h4 {
    margin-bottom: 3rem;
    color: #35495e;
  }
}
</style>
