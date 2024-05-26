import { BOOKMARK_LIST_ID } from '@constants'
import { TList } from '@types'

export const filterLists = (lists: TList[]) => {
  const bookmarksArray: TList[] = []
  const pinnedArray: TList[] = []
  const otherListsArray: TList[] = []

  lists.forEach(list => {
    if (list.id === BOOKMARK_LIST_ID) {
      bookmarksArray.push(list)
    }

    if (list.isPinned && list.id !== BOOKMARK_LIST_ID) {
      pinnedArray.push(list)
    }

    if (list.id !== BOOKMARK_LIST_ID && !list.isPinned) {
      otherListsArray.push(list)
    }
  })

  return [
    ...bookmarksArray,
    ...pinnedArray.sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()),
    ...otherListsArray.sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()),
  ]
}
