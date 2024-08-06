import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Spacer } from '@ui-kit'

import { theme } from '@constants'

import { CardsPreloader } from '../CardsPreloader'

export const ListPreloader: FC = () => (
  <>
    <Spacer sizeMob={theme.space.sm} size={theme.space.sm} />
    <Flexbox direction="column" gap={theme.space.sm}>
      <CardsPreloader />
    </Flexbox>
    <Spacer sizeMob={theme.space.sm} size={theme.space.sm} />
  </>
)
