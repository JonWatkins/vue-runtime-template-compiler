'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const { join, resolve } = require('path')

module.exports = merge(baseConfig, {
  entry: {
    app: join(__dirname, 'demo.js')
  },
  output: {
    path: resolve(__dirname, '..', 'dist'),
    library: 'VueRuntimeTemplateCompiler',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/',
    filename: 'vue-runtime-template-compiler.umd.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname),
    index: 'index.html',
    compress: true,
    port: 9000
  }
})
