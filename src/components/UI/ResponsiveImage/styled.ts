import styled from 'styled-components'

import { theme } from '@constants'

type TImageProps = {
  isMob?: boolean
  isTablet?: boolean
  isSm?: boolean
  isMd?: boolean
  isLg?: boolean
  isTouchable?: boolean
}

const Image = styled.div<TImageProps>`
  display: ${({ isMob }) => (isMob ? 'flex' : 'none')};
  flex-shrink: 0;
  cursor: ${({ isTouchable }) => (isTouchable ? 'pointer' : 'default')};
  justify-content: center;
  align-items: center;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: ${({ isTablet }) => (isTablet ? 'flex' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: ${({ isSm }) => (isSm ? 'flex' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    display: ${({ isMd }) => (isMd ? 'flex' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    display: ${({ isLg }) => (isLg ? 'flex' : 'none')};
  }
`

export const Styled = {
  Image,
}
