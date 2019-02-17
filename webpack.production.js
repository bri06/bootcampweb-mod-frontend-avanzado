const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'main.js'),
    detail: path.join(__dirname, 'src', 'detail.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]', }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'detail.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    }),
    new MiniCssExtractPlugin()
  ]
}