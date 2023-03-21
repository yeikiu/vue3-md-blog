<template>
    <v-md-editor v-model="text" @save="onSave" height="85vh" :right-toolbar="'preview sync-scroll fullscreen'"></v-md-editor>
</template>
  
<script setup lang="ts">
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// @ts-ignore | ts bug: https://github.com/microsoft/TypeScript/issues/40806
const todayStr  = new Date().toLocaleDateString("en-US", options);

const text = `# New awesome blog post title 😎
#### ${todayStr}

> Subtitle of your awesome new blog post

Remember you can mix [MarkDown](https://www.markdownguide.org/getting-started/) syntax with regular <a href="https://www.w3schools.com/html/" target="_blank">HTML</a>.

<p class="p-2 bg-danger text-white text-center">
When using HTML you can apply <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" class="text-reset" target="_blank">bootstrap</a> classes to your code-blocks!
</p>

<div class="bg-info container text-white text-center">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      Two of three columns
    </div>
    <div class="col-sm">
      Three of three columns
    </div>
  </div>
</div>

> ℹ️ Use the eraser button (3rd in the top toolbar) to clear the editor.`;

const onSave = (text: string, html: string) => {
    const postTitle = `post_${todayStr.replace(/,/mg,'').replace(/\s/mg,'_')}`;
    const zip = new JSZip();
    zip.file(`${postTitle}_source.md`, text);
    zip.file(`${postTitle}_content.html`, `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      </head>
      <body>
        <div class="container p-5 mx-auto">
          ${html}
        </div>
      </body>
    </html>`);
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, `${postTitle}.zip`);
    });
}
</script>
