import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { TMenuItem } from '@ui-kit'

import { theme } from '@constants'
import { EPagePaths, TList } from '@types'

type TUseMenuItems = {
  list: TList
  isBookmarks: boolean
  onEditClick: (list: TList) => void
  onDeleteClick: (id: string) => void
  onPin: () => void
}

export const useMenuItems = ({ isBookmarks, list, onDeleteClick, onEditClick, onPin }: TUseMenuItems): TMenuItem[] => {
  const router = useRouter()

  return useMemo(() => {
    const idsForBookmarks = ['go-to-list', 'open-in-new-tab']

    const menuItems: TMenuItem[] = [
      {
        id: 'go-to-list',
        title: 'Go to list',
        icon: 'arrow_turn_up_solid',
        color: theme.colors.grey,
        action: () => router.push(`${EPagePaths.MY_LISTS}/${list.id}`),
      },
      {
        id: 'open-in-new-tab',
        title: 'Open in new tab',
        icon: 'link_solid',
        color: theme.colors.grey,
        action: () => window.open(`${EPagePaths.MY_LISTS}/${list.id}`),
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: 'edit_solid',
        color: theme.colors.grey,
        action: () => onEditClick(list),
      },
      {
        id: 'pin',
        title: list.isPinned ? 'Unpin' : 'Pin',
        icon: 'pin_solid',
        color: theme.colors.grey,
        action: () => onPin(),
      },
      {
        id: 'delete',
        title: 'Delete',
        icon: 'trash_regular',
        color: theme.colors.red,
        action: () => onDeleteClick(list.id),
      },
    ]

    const filteredItems = menuItems.filter(item => {
      if (isBookmarks) {
        return idsForBookmarks.includes(item.id)
      }

      return item
    })

    return filteredItems
  }, [isBookmarks, list, onDeleteClick, onEditClick, onPin, router])
}
