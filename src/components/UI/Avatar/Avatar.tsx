import { FC } from 'react'

import { AVATAR_SIZES, theme } from '@constants'

import { Styled } from './styled'
import { Skeleton } from '../Skeleton'

type TAvatarProps = {
  src?: string | null
  size?: 'sm' | 'lg'
  hasAction?: boolean
}

export const Avatar: FC<TAvatarProps> = ({ src, size = 'sm', hasAction }) => (
  <Styled.Wrapper size={AVATAR_SIZES[size]}>
    {src ? (
      <>
        <Styled.Avatar
          src={src}
          alt="avatar"
          width={AVATAR_SIZES[size]}
          height={AVATAR_SIZES[size]}
          isTouchable={hasAction}
          isMob
        />
        <Styled.Avatar
          src={src}
          alt="avatar"
          width={AVATAR_SIZES[size]}
          height={AVATAR_SIZES[size]}
          isTouchable={hasAction}
          isTablet
          isSm
          isMd
          isLg
        />
      </>
    ) : (
      <Skeleton width={AVATAR_SIZES[size]} height={AVATAR_SIZES[size]} radius={theme.radiuses.round} />
    )}
  </Styled.Wrapper>
)
