# Setup your Vue Markdown Blog in less than 5 minutes
#### June 27, 2019

We will post to our final blog by simply editing markdowns directly on GitHub. Cool huh?

## Step 1 - Get your own repo ready

Login into your GitHub account and start a new repo using [vue-base-blog](https://github.com/yeikiu/vue-base-blog) as a [template](https://github.com/yeikiu/vue-base-blog/generate) or cloning it.

![Use GitHub Template](https://github.com/yeikiu/vue-base-blog/raw/master/data/assets/step1-github.png)

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
check [here](https://yeikiu.github.io/vue-base-blog/#/guide/post-with-github) how easy that task is after deployment.
