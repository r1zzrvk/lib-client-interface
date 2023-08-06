export const concatenateParams = (object = {}) =>
  Object.entries(object).reduce((t, v) => {
    if ((v[1] === undefined || v[1] === '') && v[0] !== '') {
      return t
    }

    return `${t}${v[0]}${v[1]}`
  }, '')
