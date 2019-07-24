const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   port: 3000,
  //   compress: true,
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIndentName: "[name]_[local]_[hash:base64]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  performance: {
    hints: false,
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
};