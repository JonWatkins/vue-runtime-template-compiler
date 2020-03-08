import Header from './Header.vue'
const { shallowMountLocal } = global

let wrapper

describe('Header', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Header)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Header')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
