import Provide from './Provide.vue'
const { shallowMountLocal } = global

let wrapper

describe('Provide', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Provide)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Provide')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
