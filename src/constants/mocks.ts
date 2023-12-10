/* eslint-disable quotes */
import { EPagePaths, ESearchTypes, TList, TMobileMenuItem } from '@types'

export const categoriesCardData = [
  {
    id: '1',
    title: 'Horror',
    description: 'Discover the spine-chilling world of horror books!',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/es2-DwAAQBAJ?fife=w480-h690',
  },
  {
    id: '2',
    title: 'Psychology',
    description: 'Unlock the fascinating workings of the human mind',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/5YkwzgEACAAJ?fife=w480-h690',
  },
  {
    id: '3',
    title: 'Autobiography',
    description: "Experience the depth of a person's life",
    image: 'https://books.google.com/books/publisher/content/images/frontcover/IVbtlwEACAAJ?fife=w480-h690',
  },
  {
    id: '4',
    title: 'Fiction',
    description: 'Escape into a world of imagination',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/KSxlEAAAQBAJ?fife=w480-h690',
  },
  {
    id: '5',
    title: 'Classic',
    description: 'Discover the timeless allure of classic literature',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/p6PdQQAACAAJ?fife=w480-h690',
  },
  {
    id: '6',
    title: 'Poetry',
    description: 'Unleash your imagination and indulge in the beauty of words',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/uFPPDwAAQBAJ?fife=w480-h690',
  },
  {
    id: '7',
    title: 'Cooking',
    description: 'Take your meals to the next level',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/4H-PzgEACAAJ?fife=w480-h690',
  },
  {
    id: '8',
    title: 'Adventure',
    description: 'Satisfy your craving for excitement and adrenaline-fueled adventures',
    image: 'https://books.google.com/books/publisher/content/images/frontcover/w6lrc-9EapgC?fife=w480-h690',
  },
  {
    id: '9',
    title: 'Children',
    description: "Inspire your child's love for reading",
    image: 'https://books.google.com/books/publisher/content/images/frontcover/ImlfPrztbgoC?fife=w480-h690',
  },
]

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

export const NEW_BOOKMARK_LIST: TList = {
  id: 'bookmarks',
  title: 'Bookmarks',
  description: '',
  isPinned: true,
  listItems: [],
}
