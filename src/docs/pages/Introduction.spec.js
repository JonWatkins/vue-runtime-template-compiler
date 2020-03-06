import { shallowMount } from '@vue/test-utils'
import Introduction from './Introduction.vue'
const { localVueInst } = global

let wrapper

describe('Introduction', () => {
  beforeEach(() => {
    wrapper = shallowMount(Introduction, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Introduction')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
