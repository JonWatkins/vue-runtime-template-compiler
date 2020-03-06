import app from './index'

let vm

describe('docs', () => {
  beforeEach(() => {
    vm = app.$mount()
  })

  it('render correctly', async () => {
    const selector = 'a[href="/vue-runtime-template-compiler/#/installation"'
    const link = vm.$el.querySelector(selector)
    link.click()
    await vm.$nextTick()
    const title = vm.$el.querySelector('h1 .header-anchor').innerHTML
    expect(title.includes('Installation')).toBe(true)
  })
})
