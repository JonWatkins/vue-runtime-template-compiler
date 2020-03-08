import Computed from './Computed.vue'
const { shallowMountLocal } = global

let wrapper

describe('Computed', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Computed)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Computed')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
