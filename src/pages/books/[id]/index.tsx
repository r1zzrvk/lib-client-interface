/* eslint-disable import/no-default-export */
import { useRouter } from 'next/router'
import { FC, useEffect, useMemo, useState } from 'react'

import { Flexbox, PaddingContainer } from '@components/atoms'
import { BookPageLayout, MobileBookPageLayout } from '@components/organism'

import { getBookData, getServerSidePageProps, updateList } from '@api'
import { BOOKMARK_LIST_ID, theme } from '@constants'
import { useAppSelector, useBreakpoint, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { LayoutTemplate } from '@templates'
import { TBook, TPageDataProps } from '@types'
import { filterLists } from '@utils'

export const getServerSideProps = getServerSidePageProps

const BookPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const {
    query: { id: bookId },
    isReady,
  } = useRouter()
  const { isMob, isTablet } = useBreakpoint()
  const [book, setBook] = useState<TBook | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { uid } = useAppSelector(getUserData) || {}
  const [lists, getLists] = useLists({ uid })
  const filteredLists = useMemo(() => filterLists(lists), [lists])
  const bookmarks = filteredLists?.find(list => list.id === BOOKMARK_LIST_ID)
  const isBookmarked = !!bookmarks?.listItems?.find(bookmark => bookmark.id === book?.id)
  const listsWithBook = lists?.filter(
    list => list.id !== BOOKMARK_LIST_ID && list.listItems.find(items => items.id === book?.id),
  )

  const handleAddToBookmarksClick = () => {
    if (uid && book) {
      updateList({
        book,
        isBookmarks: true,
        uid,
        updateLists: () => getLists(),
        bookmarks,
        isBookmarked,
      })
    }
  }

  const handleAddClick = (listIds: string[], book: TBook) => {
    if (uid) {
      listIds.forEach(id => {
        updateList({
          book,
          lists: filteredLists,
          isBookmarks: false,
          uid,
          updateLists: () => getLists(),
          listId: id,
        })
      })
    }
  }

  useEffect(() => {
    if (isReady && bookId && typeof bookId === 'string') {
      setIsLoading(true)
      getBookData(bookId)
        .then(book => setBook(book))
        .finally(() => setIsLoading(false))
    }
  }, [bookId, isReady, setBook])

  useEffect(() => {
    if (!lists.length && uid) {
      getLists()
    }
  })

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {isMob && (
        <MobileBookPageLayout
          book={book}
          lists={lists}
          isLoading={isLoading}
          onBookmarkClick={handleAddToBookmarksClick}
          isBookmarked={isBookmarked}
          listWithBook={listsWithBook[0]}
          onAddToListClick={handleAddClick}
        />
      )}
      {!isMob && (
        <PaddingContainer padding={isTablet ? theme.space.lg : 120}>
          <Flexbox justify="center">
            <BookPageLayout
              book={book}
              lists={lists}
              isLoading={isLoading}
              onBookmarkClick={handleAddToBookmarksClick}
              isBookmarked={isBookmarked}
              listWithBook={listsWithBook[0]}
              onAddToListClick={handleAddClick}
            />
          </Flexbox>
        </PaddingContainer>
      )}
    </LayoutTemplate>
  )
}

export default BookPage
