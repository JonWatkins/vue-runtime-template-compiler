import App from './App.vue'
const { shallowMountLocal } = global

let wrapper

describe('App', () => {
  beforeEach(() => {
    wrapper = shallowMountLocal(App)
  })

  it('is called', () => {
    expect(wrapper.name()).toBe('App')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
