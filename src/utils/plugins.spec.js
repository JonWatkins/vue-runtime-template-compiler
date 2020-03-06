'use strict'

import { use, registerComponent } from './plugins'
import Vue from 'vue'

describe('utils/plugins.js', () => {
  window.Vue

  beforeEach(() => {
    window.Vue = Vue
  })

  afterEach(() => {
    window.Vue = undefined
  })

  describe('use', () => {
    it('should be able to register a new plugin', () => {
      const plugin = {
        install: jest.fn()
      }
      use(plugin)
      expect(plugin.install.mock.calls.length).toBe(1)
    })
  })

  describe('registerComponent', () => {
    it('should be able to register a component', () => {
      const component = {
        name: 'SomeComponent',
        render(h) {
          h('div', 'hello world')
        }
      }
      registerComponent(window.Vue, component)
      expect(
        {}.hasOwnProperty.call(window.Vue.options.components, 'SomeComponent')
      ).toBe(true)
    })
  })
})
