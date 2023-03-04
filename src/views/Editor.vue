<template>
    <v-md-editor v-model="text" height="76vh" :right-toolbar="'preview sync-scroll fullscreen'"></v-md-editor>
</template>
  
<script>
export default {
    data() {
        return {
            text: `# New awesome blog post title
#### February 10, 2020

Beginning of your new awesome blog post...`,
        };
    },
};
</script>
