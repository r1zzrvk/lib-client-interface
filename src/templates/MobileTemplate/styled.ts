import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${theme.space.lg}px ${theme.space.sm}px 0px ${theme.space.sm}px;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
