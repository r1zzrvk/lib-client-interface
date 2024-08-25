import styled from 'styled-components'

import { theme } from '@constants'

import { ResponsiveImage } from '../ResponsiveImage'

type TWrapperProps = {
  size: number
}

const Avatar = styled(ResponsiveImage)`
  border-radius: ${theme.radiuses.round}px;
`

const Wrapper = styled.div<TWrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-shrink: 0;
`

export const Styled = {
  Wrapper,
  Avatar,
}
