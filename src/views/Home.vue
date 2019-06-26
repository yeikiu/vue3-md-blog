<template>
  <div class="mx-lg-5 px-lg-5">
    <div class="text-center">
      <p class="text-uppercase display-3 my-5">v-m-blog</p>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>

    <div v-for="(section, index) in Object.keys($store.state.postsIndex)" :key="index">
      <p class="text-center display-4 text-capitalize my-5">{{section}}</p>
      <div
        class="text-right mb-5 mx-lg-4 px-lg-4"
        v-for="entry in $store.state.postsIndex[section]"
        :key="entry.id"
      >
        <router-link
          tag="h3"
          class="text-left m-0 p-0 link"
          :to="{ path:`${section}/${entry.id}` }"
        >{{entry.title}}</router-link>

        <p class="text-muted m-0 p-0">{{entry.date}}</p>
        <p class="font-weight-light text-left text-justify mt-1">{{entry.description}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Custom SCSS here */

</style>
