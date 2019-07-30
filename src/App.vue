<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container pt-5 mx-lg-5 px-lg-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
  components: {
    navBar
  }
};
</script>

<style lang="scss" scoped>
/* Custom SCSS here */

/deep/ {
  .nav-bar {
    background-color: #42b883;
  }

  h1,
  h3 {
    color: #42b883;
    font-weight: normal;
  }

  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .page-link {
    color: #42b883;
  }

  .page-item.active .page-link {
    border-color: #42b883;
    background-color: #42b883;
  }

  .post img {
    max-width: 65%;
    vertical-align: middle;
    border: 0;
  }

  @media only screen and (max-width: 576px) {
    .post img {
      max-width: 95%;
      vertical-align: middle;
      border: 0;
    }
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
    color: #404d61;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
}
</style>
