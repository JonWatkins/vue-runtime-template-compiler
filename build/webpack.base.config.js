'use strict'

const webpack = require('webpack')
const { resolve } = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProd = process.env.NODE_ENV === 'production'
const { version } = require('../package.json')

module.exports = {
  mode: process.env.NODE_ENV,
  stats: 'errors-only',
  devtool: isProd ? false : '#source-map',
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(prismjs|vue-prism)\/).*/
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.APP_VERSION': version,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VUE_ENV': JSON.stringify('browser')
    })
  ],
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      public: resolve(__dirname, '..', 'public')
    }
  }
}
