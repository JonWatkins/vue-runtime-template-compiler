'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const { join, resolve } = require('path')
const isProd = process.env.NODE_ENV === 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = merge(baseConfig, {
  entry: {
    app: join(__dirname, '..', 'src', 'docs', 'bundle.js')
  },
  output: {
    path: resolve(__dirname, '..', 'docs'),
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, '..', 'docs', 'index.html'),
      template: 'build/index.template.html',
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                implementation: require('node-sass'),
                outputStyle: 'compressed',
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '..', 'docs'),
    watchContentBase: true,
    publicPath: '/',
    index: 'index.html',
    compress: true,
    port: 9000
  }
})
