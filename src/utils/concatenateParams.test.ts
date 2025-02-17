import { concatenateParams } from './concatenateParams'

describe('Utility function: concatenateParams', () => {
  const obj = {
    name: 'Alexander',
    age: '28',
    sex: 'Male',
  }

  const objWithUndefined = {
    name: 'Alexander',
    age: undefined,
    sex: 'Male',
  }

  const quaryTerms = {
    '': 'LOTR',
    '+subject:': 'Fantasy',
  }

  const authorTerms = {
    '': 'inauthor:Tolkien',
    '+subject:': 'Fantasy',
  }

  it('Should convert object keys and values to string', () => {
    expect(concatenateParams(obj)).toBe('nameAlexanderage28sexMale')
  })

  it('Should convert object keys and values to string if value is not undefined', () => {
    expect(concatenateParams(objWithUndefined)).toBe('nameAlexandersexMale')
  })

  it('Should return string with quary params for global search', () => {
    expect(concatenateParams(quaryTerms)).toBe('LOTR+subject:Fantasy')
  })

  it('Should return string with quary params for author search', () => {
    expect(concatenateParams(authorTerms)).toBe('inauthor:Tolkien+subject:Fantasy')
  })

  it('Should return empty string', () => {
    expect(concatenateParams({})).toBe('')
  })
})
