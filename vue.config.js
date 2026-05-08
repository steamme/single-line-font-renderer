module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "publicPath" : process.env.VERCEL
    ? '/'
    : process.env.NODE_ENV === 'production'
      ? '/single-line-font-renderer/'
      : '/'
}