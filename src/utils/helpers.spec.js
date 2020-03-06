'use strict'

import { merge, isObject } from './helpers'

describe('utils/helpers.js', () => {
  describe('isObject', () => {
    it('should be able to tell if something is an object', () => {
      expect(isObject({})).toBe(true)
      expect(isObject([])).toBe(false)
      expect(isObject(0)).toBe(false)
      expect(isObject(true)).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject(undefined)).toBe(false)
    })
  })

  describe('merge', () => {
    it('should be able to merge two objects', () => {
      const a = { env: 'development' }
      const b = { test: true }
      const c = merge(a, b)
      expect(c.env).toBe('development')
      expect(c.test).toBe(true)
    })

    it('should be able to deep merge two objects', () => {
      const a = { setup: { env: 'development' } }
      const b = { setup: { test: true } }
      const c = merge(a, b, true)
      expect(c.setup.env).toBe('development')
      expect(c.setup.test).toBe(true)
    })
  })
})
