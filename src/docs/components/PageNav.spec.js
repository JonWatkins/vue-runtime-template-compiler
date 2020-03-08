import PageNav from './PageNav.vue'
const { shallowMountLocal } = global

let wrapper

describe('PageNav', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(PageNav)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('PageNav')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
