import ApiReference from './ApiReference.vue'
const { shallowMountLocal } = global

let wrapper

describe('ApiReference', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(ApiReference)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('ApiReference')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
