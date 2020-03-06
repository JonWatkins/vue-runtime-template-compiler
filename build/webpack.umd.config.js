'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const { resolve } = require('path')

module.exports = merge(baseConfig, {
  output: {
    path: resolve(__dirname, '..', 'dist'),
    library: 'VueRuntimeTemplateCompiler',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/dist/',
    filename: 'vue-runtime-template-compiler.umd.js'
  }
})
