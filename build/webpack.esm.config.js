'use strict'

const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const { resolve } = require('path')

module.exports = merge(baseConfig, {
  output: {
    path: resolve(__dirname, '..', 'dist'),
    library: 'VueRuntimeTemplateCompiler',
    libraryTarget: 'var',
    publicPath: '/dist/',
    filename: 'vue-runtime-template-compiler.esm.js'
  },
  plugins: [new EsmWebpackPlugin()]
})
