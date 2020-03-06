import { shallowMount } from '@vue/test-utils'
import GettingStarted from './GettingStarted.vue'
const { localVueInst } = global

let wrapper

describe('GettingStarted', () => {
  beforeEach(() => {
    wrapper = shallowMount(GettingStarted, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('GettingStarted')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
