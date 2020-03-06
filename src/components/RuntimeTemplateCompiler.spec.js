'use strict'

import { shallowMount, mount } from '@vue/test-utils'
import RuntimeTemplateCompiler from './RuntimeTemplateCompiler.vue'
let wrapper

describe('components/RuntimeTemplateCompiler', () => {
  beforeEach(() => {
    wrapper = shallowMount(RuntimeTemplateCompiler)
  })

  it('should have a name', () => {
    expect(wrapper.name()).toBe('RuntimeTemplateCompiler')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be able to render a HTML string as a template', () => {
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          name: 'Bob',
          template: '<h1>Hello {{ name }}</h1>'
        }
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
