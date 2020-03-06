'use strict'

import { merge, mergeAll, isObject } from './helpers'

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

  describe('mergeAll', () => {
    it('should be able to merge multiple objects', () => {
      const a = { env: 'development' }
      const b = { test: true }
      const c = { version: '1.0.0' }
      const d = mergeAll([a, b, c])
      expect(d.env).toBe('development')
      expect(d.test).toBe(true)
      expect(d.version).toBe('1.0.0')
    })

    it('should be able to deep merge multiple objects', () => {
      const a = { setup: { env: 'development' } }
      const b = { setup: { test: true } }
      const c = { setup: { version: '1.0.0' } }
      const d = mergeAll([a, b, c], true)
      expect(d.setup.env).toBe('development')
      expect(d.setup.test).toBe(true)
      expect(d.setup.version).toBe('1.0.0')
    })
  })
})
