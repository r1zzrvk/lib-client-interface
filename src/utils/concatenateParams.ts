export const concatenateParams = (object = {}) =>
  Object.entries(object).reduce((t, v) => {
    if (v[1] === undefined) {
      return t
    }

    return `${t}${v[0]}${v[1]}`
  }, '')
