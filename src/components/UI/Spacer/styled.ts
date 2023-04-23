import { theme } from '@constants'
import styled from 'styled-components'

type TSpacerProps = {
  size?: number
  sizeMob?: number
}

const Spacer = styled.div<TSpacerProps>`
  height: ${({ sizeMob }) => sizeMob}px;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    height: ${({ size }) => size}px;
  }
`

export const Styled = {
  Spacer,
}
