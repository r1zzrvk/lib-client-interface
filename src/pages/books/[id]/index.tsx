import { LayoutTemplate } from '@templates'
import { TBook, TList, TPageDataProps } from '@types'
import { getBookData, getServerSidePageProps, updateBookmarkList } from '@api'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BookPageLayout, MobileBookPageLayout } from '@components/organism'
import { useAppSelector, useBreakpoint, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { BOOKMARK_LIST_ID } from '@constants'
import { Flexbox } from 'components'

export const getServerSideProps = getServerSidePageProps

const BookPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const {
    query: { id: bookId },
    isReady,
  } = useRouter()
  const { isMob } = useBreakpoint()
  const [book, setBook] = useState<TBook | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { uid } = useAppSelector(getUserData) || {}
  const [updatedList, updateList] = useState<TList | null>(null)
  const bookmarks = useLists({ uid, docId: BOOKMARK_LIST_ID, list: updatedList })?.[0]
  const isBookmarked = !!bookmarks?.listItems?.find(bookmark => bookmark.id === book?.id)

  useEffect(() => {
    if (isReady && bookId && typeof bookId === 'string') {
      setIsLoading(true)
      getBookData(bookId)
        .then(book => setBook(book))
        .finally(() => setIsLoading(false))
    }
  }, [bookId, isReady, getBookData, setBook])

  const handleBookmarkClick = async () => {
    if (uid && book) {
      if (isBookmarked) {
        updateBookmarkList({
          uid,
          list: {
            ...bookmarks,
            listItems: bookmarks.listItems.filter(item => item.id !== book?.id),
          },
        })

        updateList?.(bookmarks)
        return
      }

      updateBookmarkList({
        uid,
        list: {
          ...bookmarks,
          listItems: [
            ...bookmarks.listItems,
            {
              ...book,
            },
          ],
        },
      })

      updateList?.(bookmarks)
    }
  }

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {book && isMob && (
        <MobileBookPageLayout
          {...book}
          isLoading={isLoading}
          onBookmarkClick={handleBookmarkClick}
          isBookmarked={isBookmarked}
        />
      )}
      {book && !isMob && (
        <Flexbox justify="center">
          <BookPageLayout
            {...book}
            isLoading={isLoading}
            onBookmarkClick={handleBookmarkClick}
            isBookmarked={isBookmarked}
          />
        </Flexbox>
      )}
    </LayoutTemplate>
  )
}

export default BookPage
