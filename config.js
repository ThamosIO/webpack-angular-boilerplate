const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'application.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js?/,
      exclude: [/(node_modules|semantic)$/i],
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test   : /\.styl/,
      loader : 'style-loader!css-loader!stylus-loader'
    }, {
      test   : /\.css$/,
      loader : 'style-loader!css-loader'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test   : /\.(png|jpg)$/,
      loader : 'url-loader?limit=8192'
    }, {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader'
    }]
  }
};