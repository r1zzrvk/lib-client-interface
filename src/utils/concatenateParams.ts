export const concatenateParams = (object = {}) =>
  Object.entries(object).reduce((acc, item) => {
    if ((item[1] === undefined || item[1] === '') && item[0] !== '') {
      return acc
    }

    return `${acc}${item[0]}${item[1]}`
  }, '')
