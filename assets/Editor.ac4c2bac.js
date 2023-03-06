import{_ as n,c as a,r as s,o as l}from"./index.0b57fa76.js";const c={weekday:"long",year:"numeric",month:"long",day:"numeric"},m=new Date,i={data(){return{text:`# New awesome blog post title
#### ${m.toLocaleDateString("en-US",c)}

> Subtitle of your awesome new blog post \u{1F60E}

Remember you can mix [MarkDown](https://www.markdownguide.org/getting-started/) syntax with regular <a href="https://www.w3schools.com/html/" target="_blank">HTML</a>.`}}};function d(p,e,u,w,t,g){const o=s("v-md-editor");return l(),a(o,{modelValue:t.text,"onUpdate:modelValue":e[0]||(e[0]=r=>t.text=r),height:"76vh","right-toolbar":"preview sync-scroll fullscreen"},null,8,["modelValue"])}var h=n(i,[["render",d]]);export{h as default};
