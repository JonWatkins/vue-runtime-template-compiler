import { shallowMount } from '@vue/test-utils'
import Header from './Header.vue'
const { localVueInst } = global

let wrapper

describe('Header', () => {
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Header')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
