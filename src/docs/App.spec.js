import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
const { localVueInst } = global

let wrapper

describe('App', () => {
  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('App')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
