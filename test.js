const axios = require('axios');

const getBlogs = async () => {
  const b = await axios.get('https://raw.githubusercontent.com/yeikiu/codekomodo-blog/master/blogs.json');
    console.log({data: b.data});
  return b;
};

getBlogs();