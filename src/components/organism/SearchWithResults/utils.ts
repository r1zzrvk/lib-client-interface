import { TSearchFormValues } from '@types'

export const getDotNeed = (values: TSearchFormValues): boolean =>
  Object.entries(values)
    .filter(item => item[0] !== 'searchField')
    .some(item => !!item[1])
