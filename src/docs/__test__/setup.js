import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import arrayToString from '../filters/arrayToString'
import trim from '../filters/trim'
import { merge } from '../../utils/helpers'

Object.defineProperty(global, 'Node', {
  value: {
    firstElementChild: 'firstElementChild'
  }
})

Object.defineProperty(global, 'scrollTo', {
  value: jest.fn()
})

Object.defineProperty(global, 'shallowMountLocal', {
  value: function(component, options) {
    const localVue = createLocalVue()

    localVue.use(VueRouter)
    localVue.filter('toString', arrayToString)
    localVue.filter('trim', trim)

    const opts = merge(options, { localVue }, true)
    return shallowMount(component, opts)
  }
})
