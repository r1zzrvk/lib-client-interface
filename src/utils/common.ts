import { textLimiter } from './textLimiter'

export const sliceItems = (arr: string[], slice = 2): string =>
  arr
    ?.slice(0, slice)
    .map(item => textLimiter(item, 35))
    .join(', ')
