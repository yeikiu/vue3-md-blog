  <template>
   <div>
    <b-navbar toggleable="sm" type="dark" variant="" class="nav-bar">

      <b-navbar-brand href="#" @click="$router.push({name: 'home'})">v-m-blog</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item target="_blank" href="https://github.com/yeikiu/vue-base-blog/blob/master/README.md">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
 </div>
</template>

<style>
/* Custom SCSS here */

</style>