import { FC, useState } from 'react'
import { Card } from '@ui-kit'
import { ItemListWrapper } from '@components/atoms'
import { ItemList, StatusIllustration } from '@components/molecules'
import { TList, TSearchBookResponse } from '@types'
import { useAppSelector, useBreakpoint, useLists } from '@hooks'
import { BOOKMARK_LIST_ID, NOTHING_FOUND, SERVER_ERROR, STARTING_SEARCH, theme } from '@constants'
import { getUserData } from '@selectors'

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
  const [updatedList, updateList] = useState<TList | null>(null)
  const bookmarks = useLists({ uid, docId: BOOKMARK_LIST_ID, list: updatedList }) || []

  return (
    <>
      <ItemListWrapper rowGap={itemsGap}>
        {items && !isRequestError && (
          <ItemList
            renderItem={book => (
              <Card {...book} key={book.id} bookmarks={bookmarks[0] || []} uid={uid} updateList={updateList} />
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
