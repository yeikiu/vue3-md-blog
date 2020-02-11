  <template>
  <div>
    <b-navbar type="dark" toggleable="sm" variant class="nav-bar pr-sm-5" fixed="top">
      <b-navbar-brand href="#" @click="$router.push({name: 'home'})">v-b-blog</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-sm-5 pr-sm-5">
          <b-nav-item-dropdown text="Section" right>
            <b-dropdown-item @click="$router.push({path: `/`})" href="#">All</b-dropdown-item>
            <b-dropdown-item
              class="text-capitalize"
              v-for="(section, index) in sections"
              :key="index"
              @click="$router.push({path: `/${section}`})"
              href="#"
            >{{section}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <Ribbon class="d-none d-sm-block" v-bind="ribbonOptions"></Ribbon>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      sections: Array.from(new Set(this.$store.state.postsIndex
        .map(post => post.section))),
      ribbonOptions: {
        text: "Fork me on GitHub!",
        linkUrl: "https://github.com/yeikiu/vue-base-blog",
        border: false
      }
    };
  }
};
</script>

<style>
/* Custom SCSS here */

.github-ribbon a {
  background-color: #404d61 !important;
}
</style>