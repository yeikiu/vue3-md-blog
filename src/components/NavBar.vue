<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">

    <a class="navbar-brand" href="#/">🏠 vue-base-blog</a>
    <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" @click="collapseMenu = !collapseMenu" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" :aria-expanded="!collapseMenu" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="`navbar-collapse collapse ${collapseMenu ? '' : 'show'}`" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li :class="`nav-item dropdown ${showDropdown ? 'show' : ''}`">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="" @click.prevent="showDropdown = !showDropdown" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="showDropdown">
            Blog Sections
          </a>
          <div :class="`dropdown-menu ${showDropdown ? 'show' : ''}`" aria-labelledby="navbarDropdownMenuLink">
            <a v-for="section of sections" :key="section" class="dropdown-item text-capitalize" :href="`#/${section}`">{{section}}</a>
          </div>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script language="ts">
import { ref } from 'vue'

export default {
  props: {
    sections: Array
  },
  setup () {
    const showDropdown = ref(false)
    const collapseMenu = ref(true)
    return {
      showDropdown,
      collapseMenu
    }
  }
}
</script>
