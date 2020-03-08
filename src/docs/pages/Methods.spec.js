import Methods from './Methods.vue'
const { shallowMountLocal } = global

let wrapper

describe('Methods', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Methods)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Methods')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
