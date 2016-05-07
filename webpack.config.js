'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './App.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.tpl.html',
      inject: 'body',
      filename: './index.html',
      hash: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            "presets": ["react", "es2015", "stage-0", "react-hmre"]
          }
        },
        {
          test: /\.sass$/,
          loaders: ['style','css','sass?indentedSyntax']
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['url?limit=8192&name=imgs/[name]_[hash:8].[ext]']
        }
    ]
  }
};
