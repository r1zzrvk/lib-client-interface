import { FC } from 'react'
import { getArrayFromNumber } from '@utils'
import { SkeletonCard } from './atoms'
import { Styled } from './styled'

export const CardsPreloader: FC = () => {
  const array = getArrayFromNumber(10)

  return (
    <Styled.ItemListWrapper>
      {array.map(item => (
        <SkeletonCard key={item} />
      ))}
    </Styled.ItemListWrapper>
  )
}
