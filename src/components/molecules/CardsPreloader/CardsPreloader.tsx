import { FC } from 'react'
import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { getArrayFromNumber } from '@utils'
import { SkeletonCard } from './atoms'

export const CardsPreloader: FC = () => {
  const array = getArrayFromNumber(10)

  return (
    <Flexbox direction="column" gap={theme.space.xs2}>
      {array.map(item => (
        <SkeletonCard key={item} />
      ))}
    </Flexbox>
  )
}
