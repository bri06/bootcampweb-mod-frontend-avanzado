const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

// sample WebPack config
module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    overlay: true,
    port: 3000,
    hot: true,
    contentBase: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src', 'templates'),
    ],
    watchContentBase: true
  }
}