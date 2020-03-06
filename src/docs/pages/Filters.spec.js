import { shallowMount } from '@vue/test-utils'
import Filters from './Filters.vue'
const { localVueInst } = global

let wrapper

describe('Filters', () => {
  beforeEach(() => {
    wrapper = shallowMount(Filters, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Filters')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
