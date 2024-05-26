import { FC, useCallback, useMemo, useState } from 'react'
import { ItemListWrapper } from '@components/atoms'
import { AddToListModal, BookCard, ItemList, StatusIllustration } from '@components/molecules'
import { TBook, TList, TSearchBookResponse } from '@types'
import { useAppSelector, useBreakpoint, useDidMount, useLists } from '@hooks'
import { NOTHING_FOUND, SERVER_ERROR, STARTING_SEARCH, theme } from '@constants'
import { getUserData } from '@selectors'
import { filterLists } from '@utils'
import { updateList } from '@api'

type TResultsProps = {
  searchData: TSearchBookResponse | null
  packSize: number
  isRequestError: boolean
}

export const Results: FC<TResultsProps> = ({ isRequestError, packSize, searchData }) => {
  const { items, totalItems } = searchData || {}
  const { isMob } = useBreakpoint()
  const user = useAppSelector(getUserData)
  const { uid } = user || {}
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null)
  const [isAddToListModalOpened, setIsAddToListModalOpened] = useState(false)
  const [selectedListIds, setSelectedListIds] = useState<TList['id'][]>([])
  const itemsGap = isMob ? theme.space.xs : theme.space.sm
  const [lists, getLists] = useLists({ uid })
  const filteredLists = useMemo(() => filterLists(lists), [lists])

  const handleModalClose = () => {
    setIsAddToListModalOpened(false)
    setSelectedBook(null)
    setSelectedListIds([])
  }

  const handleAddClick = (book: TBook) => {
    setSelectedBook(book)
    setIsAddToListModalOpened(true)
  }

  const handleAddToCustomList = () => {
    if (uid && selectedBook) {
      selectedListIds.forEach(id => {
        updateList({
          book: selectedBook,
          lists: filteredLists,
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

  useDidMount(() => {
    getLists()
  })

  return (
    <>
      <ItemListWrapper rowGap={itemsGap}>
        {items && !isRequestError && (
          <ItemList
            renderItem={book => (
              <BookCard
                key={book.id}
                book={book}
                uid={uid}
                lists={filteredLists}
                updateLists={() => getLists()}
                onAddClick={handleAddClick}
              />
            )}
            items={items.slice(0, packSize)}
          />
        )}
      </ItemListWrapper>
      <StatusIllustration
        title={STARTING_SEARCH.title}
        altText={STARTING_SEARCH.altText}
        imgUrl={STARTING_SEARCH.imgUrl}
        subtitle={STARTING_SEARCH.subtitle}
        isVisible={searchData === null && !isRequestError}
      />
      <StatusIllustration
        title={NOTHING_FOUND.title}
        altText={NOTHING_FOUND.altText}
        imgUrl={NOTHING_FOUND.imgUrl}
        subtitle={NOTHING_FOUND.subtitle}
        isVisible={totalItems === 0 && !isRequestError}
      />
      <StatusIllustration
        title={SERVER_ERROR.title}
        altText={SERVER_ERROR.altText}
        imgUrl={SERVER_ERROR.imgUrl}
        subtitle={SERVER_ERROR.subtitle}
        isVisible={isRequestError}
      />
      <AddToListModal
        bookId={selectedBook?.id}
        isOpened={isAddToListModalOpened}
        onClose={handleModalClose}
        lists={filteredLists}
        onSaveClick={handleAddToCustomList}
        onSelectList={id => handleSelectId(id)}
      />
    </>
  )
}
