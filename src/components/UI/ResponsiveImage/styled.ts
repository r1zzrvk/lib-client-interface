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
  display: ${({ isMob }) => (isMob ? 'block' : 'none')};
  flex-shrink: 0;
  cursor: ${({ isTouchable }) => (isTouchable ? 'pointer' : 'default')};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: ${({ isTablet }) => (isTablet ? 'block' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: ${({ isSm }) => (isSm ? 'block' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    display: ${({ isMd }) => (isMd ? 'block' : 'none')};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    display: ${({ isLg }) => (isLg ? 'block' : 'none')};
  }
`

export const Styled = {
  Image,
}
