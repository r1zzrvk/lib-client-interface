import { useCallback, useMemo, useState } from 'react'

import { TMenuItem } from '@ui-kit'

import { BOOKMARK_LIST_ID, theme } from '@constants'
import { TBook, TList } from '@types'

type TUseSelectingListsProps = {
  bookId: TBook['id']
  lists: TList[]
}

export const useSelectingLists = ({ lists, bookId }: TUseSelectingListsProps) => {
  const listsWithoutBookmarks = lists.filter(({ id }) => id !== BOOKMARK_LIST_ID)
  const [selectedListIds, setSelectedListIds] = useState<TList['id'][]>([])
  const [listIdsWithIcon, setListIdsWithIcon] = useState<TList['id'][]>([])

  const handleSelectId = useCallback(
    (listId: string) => {
      const hasInArray = !!selectedListIds.find(item => item === listId)

      if (hasInArray) {
        setSelectedListIds(selectedListIds.filter(item => item !== listId))

        return
      }

      setSelectedListIds([...selectedListIds, listId])
    },
    [selectedListIds],
  )

  const menuItems: TMenuItem[] = useMemo(
    () =>
      listsWithoutBookmarks.map(({ id, title }) => {
        const handleClick = () => {
          handleSelectId(id)

          if (listIdsWithIcon.includes(id)) {
            setListIdsWithIcon(listIdsWithIcon.filter(item => item !== id))

            return
          }

          setListIdsWithIcon([...listIdsWithIcon, id])
        }

        return {
          action: () => handleClick(),
          color: theme.colors.grey,
          icon: listIdsWithIcon.includes(id) ? 'check_solid' : undefined,
          id,
          title,
        }
      }),
    [handleSelectId, listIdsWithIcon, listsWithoutBookmarks],
  )

  const handleClearState = () => {
    setSelectedListIds([])
    setListIdsWithIcon([])
  }

  const checkAddedLists = () => {
    listsWithoutBookmarks.forEach(({ id, listItems }) => {
      const hasOnList = !!listItems.find(({ id }) => id === bookId)
      if (hasOnList && !listIdsWithIcon.includes(id)) {
        setListIdsWithIcon([...listIdsWithIcon, id])
      }
    })
  }

  return {
    menuItems,
    selectedListIds,
    onClear: handleClearState,
    checkAddedLists,
  }
}
