module.exports = {
  publicPath: process.env.NODE_ENV === 'production' && process.env.DIST_PUBLIC_PATH
    ? `/${process.env.DIST_PUBLIC_PATH}/`
    : '/'
}
