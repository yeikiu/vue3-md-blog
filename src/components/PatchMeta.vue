<template>
  <span />
</template>

<script language="ts">
import { onMounted, defineComponent } from 'vue'
import patchMeta, { defaultValues } from '@/utils/patch_meta'

const { title, description, previewUrl, shareUrl, siteName } = defaultValues

export default defineComponent({
  props: {
    title: {
      type: String,
      default: title
    },
    description: {
      type: String,
      default: description
    },
    previewUrl: {
      type: String,
      default: previewUrl
    },
    shareUrl: {
      type: String,
      default: shareUrl
    },
    siteName: {
      type: String,
      default: siteName
    }
  },
  setup (props) {
    onMounted(async () => {
      patchMeta(props)
    })
  }
})
</script>
