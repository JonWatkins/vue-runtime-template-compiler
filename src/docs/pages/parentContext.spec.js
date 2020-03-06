import { shallowMount } from '@vue/test-utils'
import ParentContext from './ParentContext.vue'
const { localVueInst } = global

let wrapper

describe('ParentContext', () => {
  beforeEach(() => {
    wrapper = shallowMount(ParentContext, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('ParentContext')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
