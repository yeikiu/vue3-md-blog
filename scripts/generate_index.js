const path = require('path');
const fs = require('fs');
const jsonfile = require('jsonfile');

const dataPath = path.resolve('public/data');
const postsPath = path.join(dataPath, 'posts');

// Get categories
const categoryFolders = fs.readdirSync(postsPath);

// Create posts_index object
let postsIndex = {};

for (const categoryFolder of categoryFolders) {
    const categoryPath = path.join(postsPath, categoryFolder);
    const postFiles = fs.readdirSync(categoryPath);

    postsIndex[categoryFolder] = [];

    for (const postFile of postFiles) {
        const postPath = path.join(categoryPath, postFile);
        const postContent = fs.readFileSync(postPath).toString();

        const postLines = postContent.split('\n').map(l => l.trim()).filter(l => Boolean(l));
        const [ title, date, description ] = postLines;
        const [postFileId,] = postFile.split('.');
        postsIndex[categoryFolder].push({
            id: postFileId,
            date,
            title,
            description,
            url: `data/posts/${categoryFolder}/${postFile}`,
        });
    }
}

const indexPath = path.join(dataPath, 'posts_index.json');
jsonfile.writeFileSync(indexPath, postsIndex);
