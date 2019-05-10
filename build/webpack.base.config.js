const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/entrypoint.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/, loader: 'vue-loader',
        options: {
          css: 'css-loader', 'scss': 'css-loader|sass-loader'
        }
      },
      {
        test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', 'css-loader', {
            loader: 'sass-loader'
          }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'images/[hash]-[name].[ext]'
            }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Poppins' },
        { family: 'Noto Sans' }
      ],
      local: true
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
};

module.exports = config
