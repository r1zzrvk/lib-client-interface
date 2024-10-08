import { THeaderFooter } from './headerFooter'

export enum EPagePaths {
  MAIN = '/',
  CATALOG = '/books',
  PROFILE = '/profile',
  LOGIN = '/login',
  MY_LISTS = '/lists',
  ERROR = '*',
}

export enum ESortingOptions {
  NEWEST = 'Newest',
  RELEVANCE = 'Relevance',
}

export enum EFilterOptions {
  HORROR = 'Horror',
  PSYCHOLOGY = 'Psychology',
  BIOGRAPHY = 'Autobiography',
  FICTION = 'Fiction',
  CLASSIC = 'Classic',
  POETRY = 'Poetry',
  COOKING = 'Cooking',
  ADVENTURE = 'Adventure',
  CHILDREN = 'Children',
  MYSTERY = 'Mystery',
  HISTORYCAL = 'Historical',
  FANTASY = 'Fantasy',
  NOVEL = 'Novel',
  DETECTIVE = 'Detective',
  ROMANCE = 'Romance',
  THRILLER = 'Thriller',
  TRUE_CRIME = 'True Crime',
  COMPUTERS = 'Computers',
}

export type TPageDataProps = {
  headerFooterData: THeaderFooter
}

export enum EDateFormats {
  MMMM_DD_YYYY = 'MMMM DD, YYYY',
  MMMM_DD_YYYY_HH_mm = 'MMMM DD, YYYY, HH:mm',
}
