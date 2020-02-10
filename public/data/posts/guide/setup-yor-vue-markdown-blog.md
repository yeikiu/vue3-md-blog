# Setup your Vue Markdown Blog in under 5 minutes
#### June 27, 2019

This is not a guide for Vue developers, but an article helping anyone who still wants a truly free hosted blog in a time when just 
the word blog sounds like dinosaur. Still if you want a good Vue guide to get started here are the only 2 Vue sources I read before 
getting my hands dirty with this project:

- [The only VueJS series you need to read before you feel the Vue power](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
- [The article which GitHub repo I forked as a base for this blog](https://medium.com/@yhev/creating-a-simple-blog-using-vue-with-markdown-487979e1b62d) - Thanks again to [@josephharveyangeles](https://github.com/josephharveyangeles)

---

## What can you expect from following this steps?
A blog hosted freely on GitHub where you can post by simply adding Markdown files like this 

![Post Sample](https://raw.githubusercontent.com/yeikiu/vue-base-blog/master/data/assets/post-sample.png)

## Step 1 - Get your own repo ready

Login into your GitHub account and start a new repo using [vue-base-blog](https://github.com/yeikiu/vue-base-blog) as a [template](https://github.com/yeikiu/vue-base-blog/generate) or cloning it.

![Use GitHub Template](data/assets/step1-github.png)

## Step 2 - Configure your .env file

```
# Use only when deploying with no custom domain enabled in your repo's GitHub pages settings. Must match your repo name.
DIST_PUBLIC_PATH=<YOUR_REPO_NAME>

DIST_TARGET_REPO=git@github.com:<YOUR_GITHUB_USER>/<YOUR_REPO_NAME>.git
DIST_TARGET_BRANCH=gh-pages

VUE_APP_POSTS_INDEX_URL=https://raw.githubusercontent.com/<YOUR_GITHUB_USER>/<YOUR_REPO_NAME>/master/data/posts_index.json
VUE_APP_POSTS_PER_PAGE=10
```

## Step 3 - Fetch dependencies

Make sure your terminal is within your repos root folder and run `yarn install` or simply `yarn`.

## Step 4 - Test local dev environment

Run `yarn serve` and you should be able to access the site under [http://localhost:8080](http://localhost:8080)

## Step 5 - Deploy to GitHub Pages

- Run `sh deploy.sh`
- Confirm the branch `gh-pages`was generated on your repo
- Activate GitHub pages option under your repo's settings menu (make sure to choose the branch `gh-pages`)
- Your new blog should be available soon under https://<YOUR_GITHUB_USER>.github.io/<YOUR_REPO_NAME>/ if you want to
use a custom domain there are 2 little additional steps to do. You can check them [here](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages).

You will need to repeat *step 5* for any further changes you want to deploy to your site, but posting is another story,
check [here](/#/guide/post-like-a-boss) how easy that task is after deployment.
