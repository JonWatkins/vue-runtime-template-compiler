import { shallowMount } from '@vue/test-utils'
import ApiReference from './ApiReference.vue'
const { localVueInst } = global

let wrapper

describe('ApiReference', () => {
  beforeEach(() => {
    wrapper = shallowMount(ApiReference, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('ApiReference')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
