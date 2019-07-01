# Posting with Markdown like a boss 🕶
#### June 30, 2019

> The following steps can be done by using your text editor/IDE and pushing changes to your GitHub repo
> or making use of the online editor GitHub offers which works great with the preview tool

In order to post new content or edit current just open the `data` folder and create a new markdown file:
There is a folder per blog section holding the categorized markdowns, feel free to play with their names.

The `assets` folder is a special case we will use to host images or other embeded media within our posts.

![data folder](https://github.com/yeikiu/vue-base-blog/raw/master/data/assets/step2-data-folder.png)

At this point we have a 'draft' version ready, but the last step to make it visible within our blog is adding the new
post to the index `posts_index.json` file, this is the source for Vue to list our posts in the `Home` component.

![posts_index.json](https://github.com/yeikiu/vue-base-blog/raw/master/data/assets/step3-index.png)

And that´s it, commit your changes and your new post will be public to the 🌎!