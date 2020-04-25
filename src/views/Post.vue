<script>
import VueWithCompiler from "vue/dist/vue.esm";
import axios from "axios";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import spinner from "@/components/spinner.md"

const markDownIt = new MarkdownIt({ html: true }).use(emoji);

export default {
  name: "post",
  props: ["section", "id"],
  metaInfo ({ section, id }) {
    return {
      title: `${section} | ${id.replace(/-/g,' ')}`
    }
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

  methods: {
    hasHistory () { return window.history?.length > 2 }
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
          <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="my-5 btn btn-outline-success">&laquo; Back</button>
          <div class="markdown-body">
            ${html}
          </div>
          <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="my-5 btn btn-outline-success">&laquo; Back</button>
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
