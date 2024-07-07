import styled from 'styled-components'

import { theme } from '@constants'

type TSpacerProps = {
  size?: number
  sizeMob?: number
  sizeTablet?: number
}

const Spacer = styled.div<TSpacerProps>`
  height: ${({ sizeMob }) => sizeMob}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    height: ${({ size, sizeTablet }) => sizeTablet || size}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    height: ${({ size, sizeTablet }) => !!sizeTablet && size}px;
  }
`

export const Styled = {
  Spacer,
}
