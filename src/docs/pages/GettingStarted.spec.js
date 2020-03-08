import GettingStarted from './GettingStarted.vue'
const { shallowMountLocal } = global

let wrapper

describe('GettingStarted', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(GettingStarted)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('GettingStarted')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
