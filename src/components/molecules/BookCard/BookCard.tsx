import { updateList } from '@api'
import { BOOKMARK_LIST_ID } from '@constants'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { Card } from '@ui-kit'
import { useRouter } from 'next/router'
import { FC } from 'react'

type TBookCardProps = {
  book: TBook
  lists: TList[]
  updateLists: () => void
  uid?: TFirebaseUser['uid']
  onAddClick: (book: TBook) => void
}

export const BookCard: FC<TBookCardProps> = ({ book, lists, uid, updateLists, onAddClick }) => {
  const router = useRouter()
  const bookmarks = lists?.find(list => list.id === BOOKMARK_LIST_ID)
  const listsWithBook = lists?.filter(
    list => list.id !== BOOKMARK_LIST_ID && list.listItems.find(items => items.id === book.id),
  )
  const isBookmarked = !!bookmarks?.listItems?.find(bookmark => bookmark.id === book.id)

  const handleCardClick = (bookId?: string) => {
    router.push(`${EPagePaths.CATALOG}/${bookId}`)
  }

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

  return (
    <Card
      book={book}
      uid={uid}
      onAddClick={() => onAddClick(book)}
      onBookmarkClick={handleAddToBookmarksClick}
      onCardClick={handleCardClick}
      isBookmarked={isBookmarked}
      isAtLeastOneList={!!listsWithBook.length}
    />
  )
}
