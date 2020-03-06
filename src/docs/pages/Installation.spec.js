import { shallowMount } from '@vue/test-utils'
import Installation from './Installation.vue'
const { localVueInst } = global

let wrapper

describe('Installation', () => {
  beforeEach(() => {
    wrapper = shallowMount(Installation, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Installation')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
