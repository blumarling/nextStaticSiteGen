// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  distDir: 'build'
  // sassLoaderOptions: {
  //   includePaths: ["style", "absolute/path/b"]
  // }
})