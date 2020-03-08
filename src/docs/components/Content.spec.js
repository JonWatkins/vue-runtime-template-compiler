import Content from './Content.vue'
const { shallowMountLocal } = global

let wrapper

describe('Content', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Content)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Content')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
