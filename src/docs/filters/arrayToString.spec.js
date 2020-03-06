import arrayToString from './arrayToString'

describe('ApiReference', () => {
  it('it should stringify an array', () => {
    expect(arrayToString(['H', 'e', 'l', 'l', 'o'])).toBe('Hello')
  })

  it('should accept a separator', () => {
    expect(arrayToString([1, 2, 3, 4], '-')).toBe('1-2-3-4')
  })
})
