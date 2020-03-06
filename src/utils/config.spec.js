'use strict'

import config, { setOptions, setVueInstance, VueInstance } from './config'

describe('utils/config.js', () => {
  it('defaultToastDuration option should be 3000', () => {
    setOptions(Object.assign(config))
    expect(config.defaultRuntimeTemplate).toBe('<div></div>')
  })

  describe('setVueInstance', () => {
    it('should be a function', () => {
      expect(typeof setVueInstance).toBe('function')
    })

    it('should be able to set a vue instance', () => {
      const instance = { testing: true }
      setVueInstance(instance)
      expect(VueInstance).toBe(instance)
    })
  })
})
