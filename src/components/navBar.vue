  <template>
   <div>
    <b-navbar toggleable="sm" type="dark" variant="" class="nav-bar" fixed="top">

      <b-navbar-brand href="#" @click="$router.push({name: 'home'})">v-m-blog</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item target="_blank" href="https://github.com/yeikiu/vue-base-blog/blob/master/README.md">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Category" right>
            <b-dropdown-item
              @click="$router.push({path: `/`})"
              href="#">
              All
            </b-dropdown-item>
            <b-dropdown-item class="text-capitalize"
              v-for="(section, index) in sections" :key="index"
              @click="$router.push({path: `/${section}`})"
              href="#">
              {{section}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
 </div>
</template>

<script>
  export default {
    name: "nav-bar",
    data() {
      return {
        sections: Object.keys(this.$store.state.postsIndex),
      }
    }
  }
</script>

<style>
/* Custom SCSS here */

</style>