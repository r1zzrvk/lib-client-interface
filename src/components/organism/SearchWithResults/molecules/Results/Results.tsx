import { FC, useMemo } from 'react'

import { ItemListWrapper } from '@components/atoms'
import { BookCard, ItemList, StatusIllustration } from '@components/molecules'

import { updateList } from '@api'
import { NOTHING_FOUND, SERVER_ERROR, STARTING_SEARCH, theme } from '@constants'
import { useAppSelector, useBreakpoint, useDidMount, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { TBook, TSearchBookResponse } from '@types'
import { filterLists } from '@utils'

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
  const itemsGap = isMob ? theme.space.xs : theme.space.sm
  const [lists, getLists] = useLists({ uid })
  const filteredLists = useMemo(() => filterLists(lists), [lists])

  const handleAddToCustomList = (listIds: string[], book: TBook) => {
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
                onAddClick={handleAddToCustomList}
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
    </>
  )
}
