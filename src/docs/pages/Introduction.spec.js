import Introduction from './Introduction.vue'
const { shallowMountLocal } = global

let wrapper

describe('Introduction', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Introduction)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Introduction')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
