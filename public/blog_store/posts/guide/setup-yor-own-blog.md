# Setup your own Blog in under 5 minutes
#### February 11, 2020


> This tutorial assumes you have the following installed on your system:
>
> - An active [GitHub](https://github.com/) account
> - [GIT](https://git-scm.com/)
> - [NodeJS](https://nodejs.org/)


## 1.- Get your own repo

Login into your GitHub account and start a new repo.

- Use `vue3-md-blog` [as a template](https://github.com/yeikiu/vue3-md-blog/generate)

![Public Dir Structure](blog_store/assets/step1-github.png)


## 2.- Configure your `.env` file

    BASE_URL=/<YOUR-REPO-NAME>/

    VUE_APP_POSTS_PER_PAGE=5


## 3.- Test locally

Make sure your terminal is within your repos root folder and run `npm run setup`.

Then do `npm run serve` and you should be able to access the site under [http://localhost:8080](http://localhost:8080)


## 4.- Deploy with GitHub Actions

### Configure repo to serve GitHub pages

- Activate GitHub pages option under your repo's settings menu. Make sure to choose `gh-pages` branch.

### Deploy full Site to gh-pages branch

> Runs any time you generate a new release on GitHub's repo

```
    name: deploy_to_gh_pages
    on:
      release:
        types: [ created ]
```

### Deploy only updated posts folder

> Check the `.github\workflows`files to understand how the site gets deployed automagically with GitHub Actions

- Verify branch `gh-pages` is updated with new data after you push some changes and workflows run.

---

🎉 Et Voila! 🎉

Your new blog should be available soon under https://<YOUR_GITHUB_USER>.github.io/<YOUR_REPO_NAME>/


## 5.- Next Steps

- [Post with a simple commit from your favourite IDE 🕶](#/guide/post-with-a-simple-git-commit)

- Check the [features](#/features) list to see all the cool stuff you can do in your posts!

- [🖌️ Customise your blog](#/guide/customise-your-blog) (TODO)

- [Use a custom domain name](#/guide/use-a-custom-domain-name) (TODO)
