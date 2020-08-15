# Post with a simple GIT commit 🕶
#### February 09, 2020


> This tutorial is based on [VSCode](https://code.visualstudio.com/) but any IDE with an integrated shell will do the job.


This is me, writing this very line right now

![Public Dir Structure](blog_store/assets/public-structure.png)

There is a few interesting things to notice in the image, take a second look. Basically every time you want to create a new post
you will need to create a `new-post-file.md` file following a few simple rules:

- File must be located under `public/blog_store/posts/<category-name>/` folder

- You can create new folders in order to create new categories

- The heading of your file must match the following pattern, note the date format `<full_month_name month_day, full_year>`

```
# New awesome blog post title
#### February 10, 2020

Beginning of your new awesome blog post...
```

Once your post is ready to be seen by the 🌎, simply push your changes to your repo and let `GitHub Actions` do its thing.

_Note:_ It might take a while for the changes to propagate through GitHub and your browser´s cache, use incognito for a fresh check.