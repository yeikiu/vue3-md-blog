<template>
  <div id="app" class="container">
    <div class="mx-lg-5 px-lg-5">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 /* Custom SCSS here */
 
/deep/ {
  h1, h3 {
    color: #42b883;
    font-weight: normal;
  }
  
  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .post p {
    font-weight: lighter;
    margin: 1.2rem 0;
    text-align: justify;
  }
  .post h4 {
    margin-bottom: 3rem;
    color: #35495e;
  }
}
</style>
