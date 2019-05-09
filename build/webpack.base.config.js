const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/entrypoint.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
};

module.exports = config
