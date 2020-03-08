import Sandbox from './Sandbox.vue'
const { shallowMountLocal } = global

let wrapper

describe('Sandbox', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Sandbox)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Sandbox')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
