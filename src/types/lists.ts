import { TBook } from './books'
import { TFirebaseUser } from './user'

export type TList = {
  id: string
  title: string
  description: string
  isPinned: boolean
  listItems: TBook[]
}

export type TUpdateBookmarkList = {
  uid: TFirebaseUser['uid']
  list: TList
}

export enum EDatabaseDocs {
  LISTS = 'lists',
}
