<template>
  <div class="container text-center">

    <p class="text-uppercase display-3 my-5">v-m-blog</p>

    <img alt="Vue logo" src="../assets/logo.png">

    <div v-for="(section, index) in Object.keys($store.state.postsIndex)" :key="index" class="section m-5 px-5">
      <p class="display-4 text-capitalize">{{section}}</p>
      <div class="text-right mb-5" v-for="entry in $store.state.postsIndex[section]" :key="entry.id">
        
        <h3 class="text-left mb-0 pb-0">
          <router-link tag="span" :to="{ path:`${section}/${entry.id}` }">{{entry.title}}</router-link>
        </h3>
        <small class="date_subtitle">{{entry.date}}</small>
        <p class="text-left">{{entry.description}}</p>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
 /* Custom SCSS here */
  h3 {
    color: #42b883;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .date_subtitle {
    color: grey;
    font-size: 0.98rem;
    font-weight: normal;
  }
</style>
