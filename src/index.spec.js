'use strict'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRuntimeTemplateCompiler, { RuntimeTemplateCompiler } from '.'

describe('index.js', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(VueRuntimeTemplateCompiler)
  })

  it('should should install the RuntimeTemplateCompiler component', () => {
    const parent = localVue.component('parent', {
      template: '<runtime-template-compiler />'
    })
    const wrapper = shallowMount(parent)
    const compiler = wrapper.find(RuntimeTemplateCompiler)
    expect(compiler.name()).toBe('RuntimeTemplateCompiler')
    expect(compiler.isVueInstance()).toBeTruthy()
  })
})
