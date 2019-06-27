<template>
  <div class="mx-lg-5 px-lg-5">
    <div class="text-center">
      <p class="text-uppercase display-3 my-5">v-m-blog</p>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>

    <div v-for="(section, index) in Object.keys(displayPosts)" :key="index">
      <p class="text-center display-4 text-capitalize my-5">{{section}}</p>
      <div
        class="text-right mb-5 mx-lg-4 px-lg-4"
        v-for="entry in displayPosts[section]"
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

    <div class="my-5">
      <b-pagination
        class="pagination"
        align="center"
        v-model="currentPage"
        v-on:input="changePage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
  require('dotenv').config()
  export default {
    data() {
      return {
        perPage: this.$store.state.VUE_APP_POSTS_PER_PAGE,
        currentPage: 1
      }
    },

    computed: {
      rows() {
        const sections = Object.keys(this.$store.state.postsIndex);
        const reducer = (accumulator, currentValue) => accumulator + this.$store.state.postsIndex[currentValue].length;
        return sections.reduce(reducer, 0);
      },

      displayPosts() { 
        const sections = Object.keys(this.$store.state.postsIndex);
        const skip = this.currentPage > 1 ? (this.currentPage-1)*this.perPage : 0;
        let skipped = 0;
        let added = 0;
        const result = {};

        for (const section of sections) {
          for (const post of this.$store.state.postsIndex[section]) {
            if (skip > 0 && skipped < skip) {
              skipped++;
              continue;
            }

            if (added >= this.perPage) {
              continue;
            }

            result[section] || (result[section] = [])
            result[section].push(post);
            added++;
          }
        }

        return result;
      },
    },

    methods: {
      changePage: function(page) {
        console.log('YO', this.currentPage);
        console.log('YO2', page);
      }
    }
  }
</script>

<style lang="scss" scoped>
/* Custom SCSS here */

</style>
