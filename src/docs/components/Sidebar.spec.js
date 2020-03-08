import Sidebar from './Sidebar.vue'
const { shallowMountLocal } = global

let wrapper

describe('Sidebar', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Sidebar)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Sidebar')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
