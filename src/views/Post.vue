<script>
import VueWithCompiler from "vue/dist/vue.esm";
import axios from "axios";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import spinner from "@/components/spinner.md"
import backButton from "@/components/backButton.md"

const markDownIt = new MarkdownIt({ html: true }).use(emoji);

export default {
  name: "post",
  props: ["section", "id"],
  components: {
    backButton
  },

  data() {
    return {
      templateRender: null
    };
  },

  render(createElement) {
    if (this.templateRender) {
      return this.templateRender();
    } else {
      return createElement(spinner);
    }
  },

  beforeRouteUpdate() {
    document.location.reload()
  },

  created() {
    const compilePost = async () => {
      // Fetch current post md
      const url = this.$store.state.postsIndex.filter(
        p => p.id === this.id
      )[0].url;
      const md = (await axios.get(url)).data;

      // MarkDown to HTML
      const html = markDownIt.render(md);

      const compiled = VueWithCompiler.compile(`
        <div class="post my-2 py-2">
          <back-button  class="my-2"></back-button>
          <div class="markdown-body">
            ${html}
          </div>
          <back-button></back-button>
        </div>
      `);
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
