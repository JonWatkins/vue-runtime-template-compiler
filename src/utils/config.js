'use strict'

let config = {
  defaultRuntimeTemplate: '<div></div>',
  defaultCompilerOptions: {
    outputSourceRange: false,
    whitespace: 'preserve'
  }
}

export { config as default }

export let VueInstance

export const setOptions = (options) => {
  config = options
}

export const setVueInstance = (Vue) => {
  VueInstance = Vue
}
