<template>
  <nav class="navbar navbar-expand-md navbar-light" v-bind:style="`background-color: ${VUE_APP_NAVBAR_BG_CSS_COLOR}; color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`">
    <a class="navbar-brand" href="#/" v-bind:style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`">🏠 vue-base-blog</a>
    <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" @click="collapseMenu = !collapseMenu" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" :aria-expanded="!collapseMenu" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" v-bind:style="`background-color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"></span>
    </button>

    <div :class="`navbar-collapse collapse ${collapseMenu ? '' : 'show'}`" id="navbarNavDropdown">
      <ul class="pr-3 navbar-nav ml-auto">
        <li :class="`nav-item dropdown ${showDropdown ? 'show' : ''}`">
          <a v-bind:style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="" @click.prevent="showDropdown = !showDropdown" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="showDropdown">
            Blog Sections
          </a>
          <div :class="`dropdown-menu ${showDropdown ? 'show' : ''}`" aria-labelledby="navbarDropdownMenuLink">
            <a v-for="(numPosts, section) in sections" :key="section" class="dropdown-item text-capitalize" :href="`#/${section === 'all' ? '' : section}`">{{section}} ({{numPosts}})</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
s
<script language="ts">
import { ref } from 'vue'

const { VUE_APP_NAVBAR_BG_CSS_COLOR = 'black', VUE_APP_NAVBAR_TEXT_CSS_COLOR = 'white' } = process.env

export default {
  props: {
    sections: Array
  },
  setup () {
    const showDropdown = ref(false)
    const collapseMenu = ref(true)
    return {
      showDropdown,
      collapseMenu,
      VUE_APP_NAVBAR_BG_CSS_COLOR,
      VUE_APP_NAVBAR_TEXT_CSS_COLOR
    }
  }
}
</script>
