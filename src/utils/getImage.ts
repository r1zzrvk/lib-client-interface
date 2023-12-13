import { TImageLinks } from '@types'

export const getImage = (imageLinks: TImageLinks): string =>
  imageLinks?.extraLarge ||
  imageLinks?.large ||
  imageLinks?.medium ||
  imageLinks?.small ||
  imageLinks?.thumbnail ||
  imageLinks?.smallThumbnail ||
  'https://isaloni.su/800/600/https/p.calameoassets.com/200405011505-1944eb76e38074b0e1ecdd9ffef41046/p1.jpg'
