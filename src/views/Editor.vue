<template>
    <v-md-editor v-model="text" height="76vh" :right-toolbar="'preview sync-scroll fullscreen'"></v-md-editor>
</template>
  
<script>
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today  = new Date();

export default {
    data() {
        return {
            text: `# New awesome blog post title
#### ${today.toLocaleDateString("en-US", options)}

> Subtitle of your awesome new blog post 😎

Remember you can mix [MarkDown](https://www.markdownguide.org/getting-started/) syntax with regular <a href="https://www.w3schools.com/html/" target="_blank">HTML</a>.`,
        };
    },
};
</script>
