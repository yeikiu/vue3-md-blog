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

    <div
      id="navbarNavDropdown"
      class="navbar-collapse"
    >
      <ul class="navbar-nav ml-auto"
        @focusout="focusOut"
        tabindex="1">

        <li v-if="router.currentRoute.value.path !== '/editor'" class="nav-item">
          <router-link
            class="nav-link border rounded py-2 px-3"
            :to="'/editor'"
            :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
          >
            MarkDown Editor
          </router-link>
        </li>

        <li :class="`mx-5 nav-item dropleft`">
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
            style="margin-top: 30px; max-height: 200px; overflow: scroll;"
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

<script setup lang="ts">
import { ref } from 'vue';
import blogConfig from '../blog_config'
import router from '../router';

const { VUE_APP_NAVBAR_BG_CSS_COLOR = 'black', VUE_APP_NAVBAR_TEXT_CSS_COLOR = 'white' } = blogConfig

defineProps({
  title: {
    type: String,
    default: ''
  },
  sections: {
    type: Object,
    default: () => ({})
  }
});

const showDropdown = ref(false)

const focusOut = ({ relatedTarget }: any) => {
  if (!(Array.from(relatedTarget?.classList ?? []).includes('dropdown-item'))) {
    showDropdown.value = false
  }
}
</script>
