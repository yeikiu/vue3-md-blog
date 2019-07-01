# Posting with Markdown like a boss 🕶
#### June 30, 2019

> The following steps can be done by using your text editor/IDE and pushing changes to your GitHub repo
> or making use of the online editor GitHub offers which works great with the preview tool

In order to post new content or edit current just open the `data` folder and create a new markdown file:
There is a folder per blog section holding the categorized markdowns, feel free to play with their names.
The `assets` folder is a special case we will use to host images or other embeded media within our posts.



At this point we have a 'draft' version ready, but the last step to make visible within our blog is assing the new
post to the index `posts_index.json` file, this is the source for Vue to list our posts in the `Home` component.