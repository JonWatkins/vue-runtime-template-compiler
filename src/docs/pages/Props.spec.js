import { shallowMount } from '@vue/test-utils'
import Props from './Props.vue'
const { localVueInst } = global

let wrapper

describe('Props', () => {
  beforeEach(() => {
    wrapper = shallowMount(Props, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Props')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
