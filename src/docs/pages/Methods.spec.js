import { shallowMount } from '@vue/test-utils'
import Methods from './Methods.vue'
const { localVueInst } = global

let wrapper

describe('Methods', () => {
  beforeEach(() => {
    wrapper = shallowMount(Methods, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Methods')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
