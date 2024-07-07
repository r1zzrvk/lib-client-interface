/* eslint-disable import/no-default-export */
import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { BookPageLayout, MobileBookPageLayout } from '@components/organism'
import { Background, Flexbox } from '@components/atoms'
import { AddToListModal } from '@components/molecules'

import { LayoutTemplate } from '@templates'
import { TBook, TList, TPageDataProps } from '@types'
import { getBookData, getServerSidePageProps, updateList } from '@api'
import { useAppSelector, useBreakpoint, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { BOOKMARK_LIST_ID, theme } from '@constants'
import { filterLists } from '@utils'

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
  const [lists, getLists] = useLists({ uid })
  const [isAddToListModalOpened, setIsAddToListModalOpened] = useState(false)
  const [selectedListIds, setSelectedListIds] = useState<TList['id'][]>([])
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

  const handleAddClick = () => {
    setIsAddToListModalOpened(true)
  }

  const handleModalClose = () => {
    setIsAddToListModalOpened(false)
    setSelectedListIds([])
  }

  const handleAddToCustomList = () => {
    if (uid && book) {
      selectedListIds.forEach(id => {
        updateList({
          book,
          lists,
          isBookmarks: false,
          uid,
          updateLists: () => getLists(),
          listId: id,
        })
      })

      handleModalClose()
    }
  }

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
      <Background color={theme.colors.white}>
        {book && isMob && (
          <MobileBookPageLayout
            {...book}
            isLoading={isLoading}
            onBookmarkClick={handleAddToBookmarksClick}
            isBookmarked={isBookmarked}
            listWithBook={listsWithBook[0]}
            onAddToListClick={handleAddClick}
          />
        )}
        {book && !isMob && (
          <Flexbox justify="center">
            <BookPageLayout
              {...book}
              isLoading={isLoading}
              onBookmarkClick={handleAddToBookmarksClick}
              isBookmarked={isBookmarked}
              listWithBook={listsWithBook[0]}
              onAddToListClick={handleAddClick}
            />
          </Flexbox>
        )}
        <AddToListModal
          bookId={book?.id}
          isOpened={isAddToListModalOpened}
          onClose={handleModalClose}
          lists={lists}
          onSaveClick={handleAddToCustomList}
          onSelectList={id => handleSelectId(id)}
        />
      </Background>
    </LayoutTemplate>
  )
}

export default BookPage
