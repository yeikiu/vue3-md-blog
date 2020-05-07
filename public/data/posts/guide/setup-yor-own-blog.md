# Setup your own Blog in under 5 minutes
#### February 11, 2020


> This tutorial assumes you have the following stuff already:
>
> - An active GitHub account
>
> - [GIT](), [NodeJS]() and [yarn]() installed on your system


## 1.- Get your own repo

Login into your GitHub account and start a new repo.

- Use `vue-base-blog` [as a template](https://github.com/yeikiu/vue-base-blog/generate)

![Public Dir Structure](data/assets/step1-github.png)


## 2.- Configure your `.env` file

    DIST_PUBLIC_PATH=<YOUR-REPO-NAME>

    VUE_APP_POSTS_PER_PAGE=5


## 3.- Test locally

Make sure your terminal is within your repos root folder and run `yarn install` or simply `yarn`.

Run `yarn serve` and you should be able to access the site under [http://localhost:8080](http://localhost:8080)


## 4.- Deploy with GitHub Actions

### Deploy full Site to gh-pages branch

> Runs any time you push an updated package.json (i.e. add a new library or bump version) to your `master` branch.

```
    name: deploy_dist_to_gh-pages
    on:
      push:
        branches: [ master ]
```

### Deploy only updated posts folder

> Runs any time you push updated post files/assets

```
    name: update_public_data
    on:
    push:
        branches: [ master ]
        paths:
        - public/data/**/*
```

- Verify branch `gh-pages` is generated on your repo after you push some changes and `deploy_gh_pages` workflow is executed.

- Activate GitHub pages option under your repo's settings menu. Make sure to choose `gh-pages` branch.

🎉 Et Voila! 🎉

Your new blog should be available soon under https://<YOUR_GITHUB_USER>.github.io/<YOUR_REPO_NAME>/


## 5.- Next Steps

- [Write and post with your favourite IDE 🕶](#/guide/post-with-your-favourite-ide)

- Check the [features](#/features) list to see all the cool stuff you can do in your posts!

- [🖌️ Customise your blog](#/guide/customise-your-blog) (TODO)

- [Use a custom domain name](#/guide/use-a-custom-domain-name) (TODO)
