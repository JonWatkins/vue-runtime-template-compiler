import trim from './trim'

describe('trim', () => {
  it('it should trim an string', () => {
    expect(trim('    Hello    ')).toBe('Hello')
  })
})
