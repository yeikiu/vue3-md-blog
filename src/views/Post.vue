<script>
import VueWithCompiler from "vue/dist/vue.esm";

export default {
  name: "post",
  props: ['postHtml'],

  data() {
    return {
      templateRender: null,
    }
  },
  
  render (createElement) {
    if (this.templateRender) {
      return this.templateRender();
    } else {
      return createElement("div", "Loading");
    }
  },
  
  created () {
    const compiled = VueWithCompiler.compile(`<div>${this.postHtml}</div>`);
    this.templateRender = compiled.render;
    this.$options.staticRenderFns = [];
    for (const staticRenderFunction of compiled.staticRenderFns) {
      this.$options.staticRenderFns.push(staticRenderFunction);
    }
  }
};
</script>

/* <style lang="scss" scoped>
.blog {
  max-width: 50vw;
  margin: 10rem auto;

  .back {
    background-color: #42b883;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: 0.5rem;
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      background-color: transparent;
      color: #42b883;
    }
  }
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.2rem;
      color: #42b883;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: 0.3rem;
      padding: 1rem;
    }
    img {
      max-width: 100%;
    }
  }
}
</style> */
