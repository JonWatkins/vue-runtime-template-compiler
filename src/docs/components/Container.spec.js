import { shallowMount } from '@vue/test-utils'
import Container from './Container.vue'
const { localVueInst } = global

let wrapper

describe('Container', () => {
  beforeEach(() => {
    wrapper = shallowMount(Container, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Container')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
