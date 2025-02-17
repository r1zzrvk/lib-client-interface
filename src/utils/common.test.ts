import { getArrayFromNumber, sliceItems } from './common'

describe('Utility function: getArrayFromNumber', () => {
  it('Should return array of 5 numbers', () => {
    expect(getArrayFromNumber(5)).toStrictEqual([0, 1, 2, 3, 4])
  })

  it('Should throw RangeError', () => {
    expect(() => getArrayFromNumber(-2)).toThrow(RangeError)
    expect(() => getArrayFromNumber(-2)).toThrow('Invalid array length')
  })
})

describe('Utility function: sliceItems', () => {
  const arr = ['banana', 'apple', 'cherry', 'watermelon']

  it('Should slice length of array to 2 and convert to string with , between items', () => {
    expect(sliceItems(arr)).toBe('banana, apple')
  })

  it('Should slice length of array to 3 and convert to string with , between items', () => {
    expect(sliceItems(arr, 3)).toBe('banana, apple, cherry')
  })

  it('Should return empty string', () => {
    expect(sliceItems(arr, 0)).toBe('')
  })

  it('Should return 1 item', () => {
    expect(sliceItems(arr, -3)).toBe('banana')
  })
})
