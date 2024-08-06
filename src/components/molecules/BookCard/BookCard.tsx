import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { Card } from '@ui-kit'

import { updateList } from '@api'
import { BOOKMARK_LIST_ID } from '@constants'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { useSelectingLists } from '@hooks'

type TBookCardProps = {
  book: TBook
  lists: TList[]
  updateLists: () => void
  uid?: TFirebaseUser['uid']
  onAddClick?: (listIds: string[], book: TBook) => void
}

export const BookCard: FC<TBookCardProps> = ({ book, lists, uid, updateLists, onAddClick }) => {
  const router = useRouter()
  const bookmarks = lists?.find(list => list.id === BOOKMARK_LIST_ID)
  const listsWithBook = lists?.filter(
    list => list.id !== BOOKMARK_LIST_ID && list.listItems.find(items => items.id === book.id),
  )
  const isBookmarked = !!bookmarks?.listItems?.find(bookmark => bookmark.id === book.id)
  const { menuItems, selectedListIds, onClear, checkAddedLists } = useSelectingLists({ lists, bookId: book.id })

  const handleAddToBookmarksClick = () => {
    if (uid) {
      updateList({
        book,
        isBookmarks: true,
        uid,
        updateLists,
        bookmarks,
        isBookmarked,
      })
    }
  }

  const handleSubmitClick = () => {
    if (menuItems.length) {
      onAddClick?.(selectedListIds, book)
      onClear()

      return
    }

    router.push(`${EPagePaths.MY_LISTS}/?createOne=true`)
  }

  useEffect(() => {
    if (lists.length) {
      checkAddedLists()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists.length])

  return (
    <Card
      book={book}
      uid={uid}
      href={`${EPagePaths.CATALOG}/`}
      menuItems={menuItems}
      onSubmitClick={handleSubmitClick}
      onBookmarkClick={handleAddToBookmarksClick}
      onAddClick={checkAddedLists}
      isBookmarked={isBookmarked}
      isAtLeastOneList={!!listsWithBook.length}
    />
  )
}
