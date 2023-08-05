import { FC } from 'react'
import { Card } from '@ui-kit'
import { ItemListWrapper } from '@components/atoms'
import { ItemList } from '@components/molecules'
import { TResponse } from '@types'
import { useBreakpoint } from '@hooks'
import { NOTHING_FOUND, SERVER_ERROR, STARTING_SEARCH, theme } from '@constants'
import { StatusIllustration } from '../StatusIllustration'

type TResultsProps = {
  searchData: TResponse | null
  packSize: number
  isRequestError: boolean
}

export const Results: FC<TResultsProps> = ({ isRequestError, packSize, searchData }) => {
  const { items, totalItems } = searchData || {}
  const { isMob } = useBreakpoint()
  const itemsGap = isMob ? theme.space.xs : theme.space.sm

  return (
    <ItemListWrapper rowGap={itemsGap}>
      {items && !isRequestError && (
        <ItemList renderItem={book => <Card {...book} key={book.id} />} items={items.slice(0, packSize)} />
      )}
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
        isVisible={totalItems === 0 && !isRequestError}
      />
      <StatusIllustration
        title={SERVER_ERROR.title}
        altText={SERVER_ERROR.altText}
        imgUrl={SERVER_ERROR.imgUrl}
        subtitle={SERVER_ERROR.subtitle}
        isVisible={isRequestError}
      />
    </ItemListWrapper>
  )
}
