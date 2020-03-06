import { shallowMount } from '@vue/test-utils'
import Sidebar from './Sidebar.vue'
const { localVueInst } = global

let wrapper

describe('Sidebar', () => {
  beforeEach(() => {
    wrapper = shallowMount(Sidebar, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Sidebar')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
