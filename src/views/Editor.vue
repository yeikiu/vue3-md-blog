<template>
    <v-md-editor v-model="text" @save="onSave" height="76vh" :right-toolbar="'preview sync-scroll fullscreen'"></v-md-editor>
</template>
  
<script setup lang="ts">
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// @ts-ignore | ts bug: https://github.com/microsoft/TypeScript/issues/40806
const todayStr  = new Date().toLocaleDateString("en-US", options);

const text = `# New awesome blog post title
#### ${todayStr}

> Subtitle of your awesome new blog post 😎

Remember you can mix [MarkDown](https://www.markdownguide.org/getting-started/) syntax with regular <a href="https://www.w3schools.com/html/" target="_blank">HTML</a>.`;

const onSave = (text: string, html: string) => {
    const postTitle = `post_${todayStr.replace(/,/mg,'').replace(/\s/mg,'_')}`;
    const zip = new JSZip();
    zip.file(`${postTitle}_source.md`, text);
    zip.file(`${postTitle}_content.html`, html);
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, `${postTitle}.zip`);
    });
}
</script>
