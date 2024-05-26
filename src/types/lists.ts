import { TBook } from './books'
import { TFirebaseUser } from './user'

export type TList = {
  id: string
  title: string
  description: string
  isPinned: boolean
  listItems: TBook[]
  lastUpdate: string
}

export type TUpdateDocList = {
  uid: TFirebaseUser['uid']
  list: TList
  isBookmarks: boolean
}

export enum EDatabaseDocs {
  LISTS = 'lists',
}
