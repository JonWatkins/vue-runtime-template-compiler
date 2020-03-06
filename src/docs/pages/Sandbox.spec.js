import { shallowMount } from '@vue/test-utils'
import Sandbox from './Sandbox.vue'
const { localVueInst } = global

let wrapper

describe('Sandbox', () => {
  beforeEach(() => {
    wrapper = shallowMount(Sandbox, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Sandbox')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
