import { useCallback, useMemo } from 'react'

import { BOOKMARK_LIST_ID } from '@constants'
import { TList } from '@types'

type TUseFilterListsProps = {
  lists: TList[]
  query: string
  searchType?: string
}

export const useFilterLists = ({ lists, searchType, query }: TUseFilterListsProps): TList[] | null => {
  const [allLists, pinned, unpinned] = useMemo(() => {
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

    const pinnedAndSorted = pinnedArray.sort(
      (a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime(),
    )
    const otherAndSorted = otherListsArray.sort(
      (a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime(),
    )

    const allLists = [...bookmarksArray, ...pinnedAndSorted, ...otherAndSorted]

    return [allLists, pinnedAndSorted, otherAndSorted]
  }, [lists])

  const items = useCallback(() => {
    // eslint-disable-next-line default-case
    switch (searchType) {
      case 'ALL':
        return allLists
      case 'PINNED':
        return pinned
      case 'UNPINNED':
        return unpinned
    }

    return null
  }, [allLists, pinned, searchType, unpinned])

  return useMemo(() => {
    const containsInOrder = (text: string, query: string): boolean => {
      let queryIndex = 0

      // eslint-disable-next-line no-restricted-syntax
      for (const char of text) {
        if (char.toLowerCase() === query[queryIndex].toLowerCase()) {
          // eslint-disable-next-line no-plusplus
          queryIndex++
        }
        if (queryIndex === query.length) {
          return true
        }
      }

      return false
    }

    if (query) {
      return items()?.filter(item => containsInOrder(item.title, query)) || null
    }

    return items()
  }, [items, query])
}
