import { shallowMount } from '@vue/test-utils'
import Content from './Content.vue'
const { localVueInst } = global

let wrapper

describe('Content', () => {
  beforeEach(() => {
    wrapper = shallowMount(Content, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Content')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
