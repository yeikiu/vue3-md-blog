type PatchMetaT = {
  title?: string;
  description?: string;
  previewUrl?: string;
  shareUrl?: string;
  siteName?: string;
}

export const defaultValues = {
  title: 'Minimal Vue3 + Markdown blog engine',
  description: 'Simply fork and deploy!',
  previewUrl: 'https://github.com/yeikiu/vue-base-blog/blob/master/src/assets/logo.png?raw=true',
  shareUrl: 'https://yeikiu.github.io/vue-base-blog/#/',
  siteName: 'vue-base-blog'
}

const patchMeta = ({
  title = defaultValues.title,
  description = defaultValues.description,
  previewUrl = defaultValues.previewUrl,
  shareUrl = defaultValues.shareUrl,
  siteName = defaultValues.siteName
}: PatchMetaT) => {
  // Patch title
  const [titleEl] = document.getElementsByTagName('title')
  titleEl.textContent = `${siteName} | ${title} - ${description}`

  // Patch META
  Array.from(document.getElementsByClassName('APP_META')).forEach(el => { el.remove() })
  const APP_META = `<meta class="APP_META" property="og:title" content="${title}">
      <meta class="APP_META" property="og:description" content="${description}">
      <meta class="APP_META" property="og:image" content="${previewUrl}">
      <meta class="APP_META" property="og:url" content="${shareUrl || location.href}">
      <meta class="APP_META" name="twitter:card" content="summary_large_image">
      <meta class="APP_META" property="og:site_name" content="${siteName}">`
  const [headEl] = document.getElementsByTagName('head')
  if (!headEl) return
  headEl.innerHTML = `${headEl.innerHTML}${APP_META}`
}

export default patchMeta
