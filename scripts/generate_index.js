/* eslint-disable @typescript-eslint/no-var-requires */

const { join, resolve } = require('path')
const removeMd = require('remove-markdown')
const moment = require('moment')
const { writeFileSync, readdirSync, readFileSync } = require('fs')
const dataPath = resolve('public/blog_store')
const postsPath = join(dataPath, 'posts')

// Get categories
const categoryFolders = readdirSync(postsPath)

// Create posts_index object
const postsIndex = []

for (const categoryFolder of categoryFolders) {
  const categoryPath = join(postsPath, categoryFolder)
  const postFiles = readdirSync(categoryPath)

  for (const postFile of postFiles) {
    const postPath = join(categoryPath, postFile)
    const postContent = readFileSync(postPath).toString()
    const postLines = removeMd(postContent)
      .split('\n').map(l => l.trim()).filter(l => Boolean(l))

    const [title, date, ...fullPost] = postLines
    const fullPostLines = fullPost.join(' ')
    const descriptionLines = fullPostLines.split(' ').slice(0, 64).join(' ')
    const description = `${descriptionLines}${fullPostLines.trim().length > descriptionLines.trim().length ? '...' : ''}`
    const [postFileId,] = postFile.split('.md')

    postsIndex.push({
      id: postFileId,
      section: categoryFolder,
      date,
      title,
      description,
      url: `blog_store/posts/${categoryFolder}/${postFile}`,
    })
  }
}

// Sort Posts by date
postsIndex.sort((a, b) => moment(b.date, 'MMMM D, YYYY').format('YYYYMMDD') - moment(a.date, 'MMMM D, YYYY').format('YYYYMMDD'))

const indexPath = join(dataPath, 'posts_index.json')
writeFileSync(indexPath, JSON.stringify(postsIndex, null, 4))
