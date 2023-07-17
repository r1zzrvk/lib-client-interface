import { theme } from '@constants'
import styled from 'styled-components'

type TBackgroundProps = {
  color: string
}

export const Background = styled.div<TBackgroundProps>`
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  width: 100%;
  background-color: ${({ color }) => color};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px;
    margin: 0px;
  }
`
