import styled from 'styled-components'

import { theme } from '@constants'

type TBackgroundProps = {
  color: string
}

export const Background = styled.div<TBackgroundProps>`
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px;
    margin: 0px;
  }
`
