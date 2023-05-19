import { TImageLinks } from '@types'

export const getImage = (imageLinks: TImageLinks): string =>
  imageLinks?.extraLarge ||
  imageLinks?.large ||
  imageLinks?.medium ||
  imageLinks?.small ||
  imageLinks?.smallThumbnail ||
  imageLinks?.thumbnail ||
  'https://cdn-icons-png.flaticon.com/512/5606/5606108.png'
