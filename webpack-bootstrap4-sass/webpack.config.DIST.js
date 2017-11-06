const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['./js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            // no style-loader anymore!!
            // since we now extract styles into a separate file.
            // { loader: "style-loader" },
            // translates CSS into CommonJS
            { loader: "css-loader", options: { sourceMap: true } },
            // compiles Sass to CSS
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/style.min.css"),
    new CopyWebpackPlugin([
      { from: '*.html' },
      { from: 'img/**' },
      //{ from: 'favicon.ico' }
    ])
  ],
  resolve: {
    modules: ['node_modules']
  }
};
