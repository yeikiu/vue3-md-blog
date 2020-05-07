module.exports = {
  chainWebpack(config){
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  publicPath: process.env.NODE_ENV === 'production' && process.env.DIST_PUBLIC_PATH
    ? `/${process.env.DIST_PUBLIC_PATH}/`
    : '/'
}
