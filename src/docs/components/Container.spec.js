import Container from './Container.vue'
const { shallowMountLocal } = global

let wrapper

describe('Container', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Container)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Container')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
