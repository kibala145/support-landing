// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src/'),
      Mixins: path.resolve(__dirname, 'src/scss/mixins')
    }
  }

  return config
}
