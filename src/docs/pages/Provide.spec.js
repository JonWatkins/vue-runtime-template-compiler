import { shallowMount } from '@vue/test-utils'
import Provide from './Provide.vue'
const { localVueInst } = global

let wrapper

describe('Provide', () => {
  beforeEach(() => {
    wrapper = shallowMount(Provide, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Provide')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
