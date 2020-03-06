'use strict'

let config = {
  defaultRuntimeTemplate: '<div></div>'
}

export { config as default }

export let VueInstance

export const setOptions = (options) => {
  config = options
}

export const setVueInstance = (Vue) => {
  VueInstance = Vue
}
