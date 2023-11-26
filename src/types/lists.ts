import { TBook } from './books'
import { TFirebaseUser } from './user'

export type TUpdateBookmarkList = {
  uid: TFirebaseUser['uid']
  list: TBook[]
}

export enum EDatabaseDocs {
  LISTS = 'lists',
}

export type TList = {
  listTitle: string
  listItems: TBook[]
}
