const path = require('path');
const fs = require('fs');
const removeMd = require('remove-markdown');
const jsonfile = require('jsonfile');
const moment = require('moment');

const dataPath = path.resolve('public/data');
const postsPath = path.join(dataPath, 'posts');

// Get categories
const categoryFolders = fs.readdirSync(postsPath);

// Create posts_index object
const postsIndex = [];

for (const categoryFolder of categoryFolders) {
    const categoryPath = path.join(postsPath, categoryFolder);
    const postFiles = fs.readdirSync(categoryPath);

    for (const postFile of postFiles) {
        const postPath = path.join(categoryPath, postFile);
        const postContent = fs.readFileSync(postPath).toString();
        const postLines = removeMd(postContent)
            .split('\n').map(l => l.trim()).filter(l => Boolean(l));

        const [ title, date, description ] = postLines;
        const [postFileId,] = postFile.split('.md');

        postsIndex.push({
            id: postFileId,
            section: categoryFolder,
            date,
            title,
            description,
            url: `data/posts/${categoryFolder}/${postFile}`,
        });
    }
}

// Sort Posts by date
postsIndex
    .sort((a,b) => moment(b.date, 'MMMM D, YYYY').format('YYYYMMDD') - moment(a.date, 'MMMM D, YYYY').format('YYYYMMDD'));

const indexPath = path.join(dataPath, 'posts_index.json');
jsonfile.writeFileSync(indexPath, postsIndex);
