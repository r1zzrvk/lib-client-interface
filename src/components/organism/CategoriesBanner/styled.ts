import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: block;
    padding: ${theme.space.xl3}px ${theme.space.lg}px ${theme.space.xl3}px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xl4}px 120px ${theme.space.xl4}px 120px;
  }
`

export const Styled = {
  Wrapper,
}
