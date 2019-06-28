# vue-base-blog
### Creating a simple blog using Vue + GitHub Pages to host the client.

Posts are stored externally as markdowns sources and compiled in runtime.

I´m using the same project´s GitHub repo as it is public, but the index JSON and the markdowns for the posts can be located anywhere accesible by URL. Edit the source and check the result online!

# Quick start
```
git clone https://yeikiu.github.io/vue-base-blog
cd vue-base-blog
yarn
yarn serve
```

# Demo
Demo website is over here: [https://yeikiu.github.io/vue-base-blog](https://yeikiu.github.io/vue-base-blog)

## Compile for production
```
yarn build
```

## Lints and fixes files
```
yarn lint
```

## Deploy to GitHub pages
```
sh deploy.sh
```

# Special thanks to
[@josephharveyangeles](https://github.com/josephharveyangeles/vue-markdown-blog) for his inspiring blog post and repo! :)