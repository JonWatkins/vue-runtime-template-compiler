import Installation from './Installation.vue'
const { shallowMountLocal } = global

let wrapper

describe('Installation', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Installation)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Installation')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
