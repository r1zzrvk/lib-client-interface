import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Skeleton, Spacer } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

export const SkeletonCard: FC = () => (
  <Flexbox gap={theme.space.xs2}>
    <Skeleton width={120} height={180} radius={theme.radiuses.sm} />
    <Styled.ContentContainer>
      <Skeleton width={120} height={24} radius={8} />
      <div>
        <Skeleton width={100} height={18} radius={8} />
        <Spacer size={theme.space.xs3} samespace />
        <Skeleton width={70} height={18} radius={8} />
      </div>
    </Styled.ContentContainer>
  </Flexbox>
)
