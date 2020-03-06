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

  it('should be able to use a method', async () => {
    const clickHandler = jest.fn()
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          template: '<a @click="clickEvent">Click Me</a>'
        }
      },
      methods: {
        clickEvent: clickHandler
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    const anchor = wrapper.find('a')
    anchor.trigger('click')
    await wrapper.vm.$nextTick()
    expect(clickHandler.mock.calls.length).toBe(1)
    anchor.trigger('click')
    await wrapper.vm.$nextTick()
    expect(clickHandler.mock.calls.length).toBe(2)
  })

  it('should be able able to use computed properties', () => {
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          template: '<h1>Hello {{ name }}</h1>'
        }
      },
      computed: {
        name() {
          return 'Bob'
        }
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    expect(wrapper.text()).toBe('Hello Bob')
  })

  it('should be able able to use "props" properties', () => {
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          template: '<h1>Hello {{ name }}</h1>'
        }
      },
      props: {
        name: {
          type: String,
          default: 'Bob'
        }
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    expect(wrapper.text()).toBe('Hello Bob')
  })

  it('should be able able to use filters', () => {
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          name: 'World',
          template: '<h1>Hello {{ name | reverseString }}</h1>'
        }
      },
      filters: {
        reverseString(str) {
          return str
            .split('')
            .reverse()
            .join('')
        }
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    expect(wrapper.text()).toBe('Hello dlroW')
  })

  it('should be able able to use provide properties', () => {
    wrapper = mount({
      components: {
        RuntimeTemplateCompiler
      },
      data() {
        return {
          template: '<h1>Hello {{ name }}</h1>'
        }
      },
      provide: {
        name: 'Bob'
      },
      template: `
        <runtime-template-compiler :template="template" />
      `
    })

    expect(wrapper.text()).toBe('Hello Bob')
  })
})
