<template>
  <div class="home">
    <!-- <foo />
    <foo2 />-->
    <h1 class="headline center">v-m-blog</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="loadPostMD(entry.id, entry.url)">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Foo from "@/components/foo.md";
import Foo2 from "@/components/foo2.vue";
import BLOGENTRIES from "@/assets/data/blogs.json";

export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  },
  methods: {
    loadPostMD(id, url) {
      console.log('loadPostMD', {id, url})
      this.$store.dispatch('fetchPost', url)
      this.$router.push({name: id})
    }
  }
};
</script>
/* <style lang="scss" scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: 0.98rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: 0.4rem;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}
</style> */
