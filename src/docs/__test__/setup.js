import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import arrayToString from '../filters/arrayToString'
import trim from '../filters/trim'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.filter('toString', arrayToString)
localVue.filter('trim', trim)

Object.defineProperty(global, 'Node', {
  value: {
    firstElementChild: 'firstElementChild'
  }
})

Object.defineProperty(global, 'localVueInst', {
  value: localVue
})

Object.defineProperty(global, 'scrollTo', {
  value: jest.fn()
})
