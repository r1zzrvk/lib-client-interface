/* eslint-disable quotes */
import { EPagePaths, ESearchTypes, TMobileMenuItem } from '@types'

export const categoriesCardData = [
  {
    id: '1',
    title: 'Horror',
    description: 'Discover the spine-chilling world of horror books!',
    image:
      'http://books.google.com/books/content?id=es2-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    id: '2',
    title: 'Psychology',
    description: 'Unlock the fascinating workings of the human mind',
    image: 'https://books.google.com/books/content?id=5YkwzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  },
  {
    id: '3',
    title: 'Autobiography',
    description: "Experience the depth of a person's life",
    image: 'https://books.google.com/books/content?id=IVbtlwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  },
  {
    id: '4',
    title: 'Fiction',
    description: 'Escape into a world of imagination',
    image:
      'https://books.google.com/books/content?id=KSxlEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    id: '5',
    title: 'Classic',
    description: 'Discover the timeless allure of classic literature',
    image: 'https://books.google.com/books/content?id=p6PdQQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  },
  {
    id: '6',
    title: 'Poetry',
    description: 'Unleash your imagination and indulge in the beauty of words',
    image:
      'https://books.google.com/books/content?id=uFPPDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    id: '7',
    title: 'Cooking',
    description: 'Take your meals to the next level',
    image: 'https://books.google.com/books/content?id=4H-PzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  },
  {
    id: '8',
    title: 'Adventure',
    description: 'Satisfy your craving for excitement and adrenaline-fueled adventures',
    image:
      'https://books.google.com/books/content?id=w6lrc-9EapgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    id: '9',
    title: 'Children',
    description: "Inspire your child's love for reading",
    image:
      'https://books.google.com/books/content?id=ImlfPrztbgoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
]

export const userData = {
  id: '1',
  firstName: 'Stanislav',
  surName: 'Vyalkin',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3AOkgyZFdaTbT4PiGfV2cojBVreO6DANjw&usqp=CAU',
  email: 'r1zzrvk@gmail.com',
}

export const fastSearchBadges = [
  {
    id: '1',
    value: 'king',
    label: 'Stephen King',
    type: ESearchTypes.AUTHOR,
  },
  {
    id: '2',
    value: 'tolkien',
    label: 'Tolkien',
    type: ESearchTypes.AUTHOR,
  },
  {
    id: '3',
    value: 'computers',
    label: 'Computers',
    type: ESearchTypes.CATEGORY,
  },
  {
    id: '4',
    value: 'cooking',
    label: 'Cooking',
    type: ESearchTypes.CATEGORY,
  },
  {
    id: '5',
    value: 'bloomsbury',
    label: 'Bloomsbury',
    type: ESearchTypes.PUBLISHER,
  },
  {
    id: '6',
    value: "o'reilly",
    label: "O'Reilly",
    type: ESearchTypes.PUBLISHER,
  },
]

export const mobileMenuItems: TMobileMenuItem[] = [
  {
    id: 1,
    title: 'Home',
    icon: 'home_solid',
    path: EPagePaths.MAIN,
  },
  {
    id: 2,
    title: 'Catalog',
    icon: 'catalog_solid',
    path: EPagePaths.CATALOG,
  },
  {
    id: 3,
    title: 'Lists',
    icon: 'bookmark_solid',
    path: EPagePaths.MY_LISTS,
  },
  {
    id: 4,
    title: 'Profile',
    icon: 'user_solid',
    path: EPagePaths.PROFILE,
  },
]

export const NO_LIST_TITLE = 'No name'
