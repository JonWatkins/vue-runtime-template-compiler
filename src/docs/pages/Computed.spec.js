import { shallowMount } from '@vue/test-utils'
import Computed from './Computed.vue'
const { localVueInst } = global

let wrapper

describe('Computed', () => {
  beforeEach(() => {
    wrapper = shallowMount(Computed, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Computed')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
