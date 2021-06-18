<template>
  <nav
    class="navbar navbar-expand-md navbar-light mb-0"
    :style="`background-color: ${VUE_APP_NAVBAR_BG_CSS_COLOR}; color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
  >
    <router-link
      class="navbar-brand"
      :to="'/'"
      :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
    >
      {{ title }}
    </router-link>
    <button
      :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      :aria-expanded="!collapseMenu"
      aria-label="Toggle navigation"
      @click="collapseMenu = !collapseMenu"
    >
      <span
        class="navbar-toggler-icon"
        :style="`background-color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
      />
    </button>

    <div
      id="navbarNavDropdown"
      :class="`navbar-collapse collapse ${collapseMenu ? '' : 'show'}`"
    >
      <ul class="ml-auto mr-5 pr-5 navbar-nav">
        <li :class="`nav-item dropleft dropdown ${showDropdown ? 'show' : ''}`">
          <a
            id="navbarDropdownMenuLink"
            :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
            @click.prevent="showDropdown = !showDropdown"
          >
            Sections
          </a>
          <div
            :class="`dropdown-menu ${showDropdown ? 'show' : ''}`"
            style="max-height: 200px; overflow: scroll;"
          >
            <router-link
              v-for="(count, section) of sections"
              :key="section"
              class="dropdown-item text-capitalize"
              :to="section === 'all' ? '/' : `/${section}`"
              @click="showDropdown=false"
            >
              {{ section }} ({{ count }})
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script language="ts">
import { defineComponent, ref } from 'vue'

const { VUE_APP_NAVBAR_BG_CSS_COLOR = 'black', VUE_APP_NAVBAR_TEXT_CSS_COLOR = 'white' } = process.env

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    sections: {
      type: Object,
      default: () => ({})
    }
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
})
</script>
