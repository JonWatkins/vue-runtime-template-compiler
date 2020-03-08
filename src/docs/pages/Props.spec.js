import Props from './Props.vue'
const { shallowMountLocal } = global

let wrapper

describe('Props', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Props)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Props')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
