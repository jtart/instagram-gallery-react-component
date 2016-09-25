var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/instagram_gallery.js',
  output: { path: __dirname, filename: 'instagram_gallery.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};