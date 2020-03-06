import { shallowMount } from '@vue/test-utils'
import PageNav from './PageNav.vue'
const { localVueInst } = global

let wrapper

describe('PageNav', () => {
  beforeEach(() => {
    wrapper = shallowMount(PageNav, {
      localVue: localVueInst
    })
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('PageNav')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
