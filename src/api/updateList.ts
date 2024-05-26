import { TBook, TFirebaseUser, TList } from '@types'
import { updateDocList } from './lists'

type TUpdateList = {
  uid: TFirebaseUser['uid']
  book: TBook
  isBookmarks: boolean
  updateLists: () => void
  lists?: TList[]
  bookmarks?: TList
  list?: TList
  listId?: TList['id'] | null
  isBookmarked?: boolean
}

const addToList = ({ uid, bookmarks, book, isBookmarks, list, updateLists }: TUpdateList) => {
  if (isBookmarks && bookmarks) {
    updateDocList({
      uid,
      list: {
        ...bookmarks,
        lastUpdate: new Date().toISOString(),
        listItems: [...bookmarks.listItems, book],
      },
      isBookmarks,
    }).then(() => updateLists())

    return
  }

  if (list) {
    updateDocList({
      uid,
      list: {
        ...list,
        lastUpdate: new Date().toISOString(),
        listItems: [...list.listItems, book],
      },
      isBookmarks,
    }).then(() => updateLists())
  }
}

const removeFromList = ({ book, bookmarks, isBookmarks, uid, updateLists, list }: TUpdateList) => {
  if (isBookmarks && bookmarks) {
    updateDocList({
      uid,
      list: {
        ...bookmarks,
        listItems: bookmarks?.listItems.filter(item => item.id !== book.id) || [],
        lastUpdate: new Date().toISOString(),
      },
      isBookmarks,
    }).then(() => updateLists())

    return
  }

  if (list) {
    updateDocList({
      uid,
      list: {
        ...list,
        lastUpdate: new Date().toISOString(),
        listItems: list?.listItems.filter(item => item.id !== book.id) || [],
      },
      isBookmarks,
    }).then(() => updateLists())
  }
}

export const updateList = ({
  book,
  bookmarks,
  isBookmarked,
  isBookmarks,
  lists,
  uid,
  updateLists,
  listId,
}: TUpdateList) => {
  const currentList = lists?.find(list => list.id === listId)
  const isCurrentListAdded = currentList?.listItems.find(item => item.id === book.id)

  if (isCurrentListAdded || isBookmarked) {
    removeFromList({ book, bookmarks, isBookmarks, lists, uid, updateLists, list: currentList })

    return
  }

  addToList({ book, bookmarks, isBookmarks, lists, uid, updateLists, list: currentList })
}
