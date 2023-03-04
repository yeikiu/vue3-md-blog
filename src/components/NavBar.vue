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
      :class="`navbar-toggler collapsed`"
      type="button"
      aria-label="Toggle navigation"
      @click.prevent="showDropdown = !showDropdown"
    >
      <span
        class="navbar-toggler-icon"
        :style="`background-color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
      />
    </button>

    <div v-if="currentRoute.path !== '/editor'" class="container">
      <router-link
        class="mx-auto border border-white py-2 px-3 rounded"
        :to="'/editor'"
        :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
      >
        <div class=""> MarkDown Editor</div>
      </router-link>
    </div>

    <div
      id="navbarNavDropdown"
      class="navbar-collapse"
    >
      <ul class="ml-auto mr-md-5 pr-md-5 navbar-nav"
        @focusout="focusOut"
        tabindex="1">
        <li :class="`nav-item dropdown ${showDropdown ? 'show' : 'dropup'}`">
          <a
            id="navbarDropdownMenuLink"
            :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
            class="nav-link dropdown-toggle d-none d-md-block"
            role="button"
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
import blogConfig from '../blog_config'
import router from '../router';

const { VUE_APP_NAVBAR_BG_CSS_COLOR = 'black', VUE_APP_NAVBAR_TEXT_CSS_COLOR = 'white' } = blogConfig

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
  setup() {
    const showDropdown = ref(false)

    const focusOut = ({ relatedTarget }) => {
      if (!(Array.from(relatedTarget?.classList ?? []).includes('dropdown-item'))) {
        showDropdown.value = false
      }
    }

    return {
      focusOut,
      showDropdown,
      VUE_APP_NAVBAR_BG_CSS_COLOR,
      VUE_APP_NAVBAR_TEXT_CSS_COLOR,
      currentRoute: router.currentRoute
    }
  }
})
</script>
