import ParentContext from './ParentContext.vue'
const { shallowMountLocal } = global

let wrapper

describe('ParentContext', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(ParentContext)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('ParentContext')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
