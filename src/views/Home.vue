<template>
  <div class="mx-lg-5 px-lg-5">
    
    <blog-header class="markddown-body mb-5"></blog-header>

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
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
  import blogHeader from "@/components/blogHeader.md";

  export default {
    name: "home",
    props: ["section"],
    components: {
      blogHeader
    },
    data() {
      return {
        perPage: this.$store.state.VUE_APP_POSTS_PER_PAGE,
        currentPage: 1,        
      }
    },

    computed: {
      sections() {
        return this.section ?
          [this.section] : Object.keys(this.$store.state.postsIndex)
      },
      rows() {
        const reducer = (accumulator, currentValue) => accumulator + this.$store.state.postsIndex[currentValue].length;
        return this.sections.reduce(reducer, 0);
      },

      displayPosts() {
        const skip = this.currentPage > 1 ? (this.currentPage-1)*this.perPage : 0;
        let skipped = 0;
        let added = 0;
        const result = {};

        for (const section of this.sections) {
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
    }
  }
</script>

<style lang="scss" scoped>
/* Custom SCSS here */

</style>
