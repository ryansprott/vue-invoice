const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/entrypoint.js')
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader', options: { css: 'css-loader', 'scss': 'css-loader|sass-loader' } },
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};

module.exports = config
