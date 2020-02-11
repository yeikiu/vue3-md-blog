<template>
  <div class="mx-lg-5 px-lg-5">
    
    <blog-header v-if="!section" class="markddown-body mb-5"></blog-header>
    <blog-header-section v-if="section" class="markddown-body mb-5"></blog-header-section>

    <p v-if="section" class="text-center display-4 text-capitalize my-5">{{section}}</p>
          
    <div
      class="text-right mb-5 mx-lg-4 px-lg-4"
      v-for="entry in displayPosts"
      :key="entry.id"
    >
      <router-link
        tag="h3"
        class="text-left m-0 p-0 link"
        :to="{ path:`${entry.section}/${entry.id}` }"
      >{{entry.title}}</router-link>

      <p class="text-muted m-0 p-0">{{entry.date}}</p>
      <router-link
        tag="h6"
        class="m-0 p-0 link"
        :to="{ path:`${entry.section}` }"
      >#{{entry.section}}</router-link>

      <p class="font-weight-light text-left text-justify mt-1">{{entry.description}}</p>
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
  import blogHeaderSection from "@/components/blogHeaderSection.md";

  export default {
    name: "home",
    props: ["section"],
    components: {
      blogHeader,
      blogHeaderSection
    },
    data() {
      return {
        perPage: parseInt(this.$store.state.VUE_APP_POSTS_PER_PAGE, 10),
        currentPage: 1,
      }
    },

    computed: {
        allPosts() {
          return this.section ? this.$store.state.postsIndex.filter(post => post.section === this.section) : this.$store.state.postsIndex;
        },
        rows() {
          return this.allPosts.length;
        },
        displayPosts() {
          const skip = this.currentPage > 1 ? (this.currentPage-1)*this.perPage : 0;
          const limit = skip + this.perPage;
          return this.section ? this.allPosts.filter(post => post.section === this.section).slice(skip, limit) : this.allPosts.slice(skip, limit);
        }
    }
  }
</script>

<style lang="scss" scoped>
/* Custom SCSS here */

</style>
