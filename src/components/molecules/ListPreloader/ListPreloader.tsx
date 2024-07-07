import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Skeleton, Spacer } from '@ui-kit'

import { theme } from '@constants'

import { CardsPreloader } from '../CardsPreloader'

export const ListPreloader: FC = () => (
  <>
    <Spacer sizeMob={theme.space.sm} size={theme.space.sm} />
    <Flexbox direction="column" gap={theme.space.sm}>
      <Skeleton height={166} radius={theme.radiuses.md} />
      <CardsPreloader />
    </Flexbox>
    <Spacer sizeMob={theme.space.sm} size={theme.space.sm} />
  </>
)
