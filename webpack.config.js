// Imports
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Folder paths
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIR + '/index.js',
  watch: true,
  watchOptions: {
    poll: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: /src/,
        loader: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],
}