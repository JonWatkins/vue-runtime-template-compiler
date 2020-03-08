import Filters from './Filters.vue'
const { shallowMountLocal } = global

let wrapper

describe('Filters', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(Filters)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('Filters')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
