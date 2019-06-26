<script>
import VueWithCompiler from "vue/dist/vue.esm";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default {
  name: "post",
  props: ["section", "id"],

  data() {
    return {
      templateRender: null
    };
  },

  render(createElement) {
    if (this.templateRender) {
      return this.templateRender();
    } else {
      return createElement("div", "Loading...");
    }
  },

  created() {
    const compilePost = async () => {
      // Fetch current post md
      const url = this.$store.state.postsIndex[this.section].filter(
        p => p.id === this.id
      )[0].url;
      const md = (await axios.get(url)).data;

      // MarkDown to HTML
      const html = new MarkdownIt({ html: true }).render(md);

      const compiled = VueWithCompiler.compile(`<div class="markdown-body">${html}</div>`);
      this.templateRender = compiled.render;
      this.$options.staticRenderFns = [];
      for (const staticRenderFunction of compiled.staticRenderFns) {
        this.$options.staticRenderFns.push(staticRenderFunction);
      }
    };
    compilePost();
  }
};
</script>

<style lang="scss" scoped>
/* Custom SCSS here */

</style>
