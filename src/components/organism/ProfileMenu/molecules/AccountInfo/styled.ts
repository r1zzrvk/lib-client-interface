import { theme } from '@constants'
import styled from 'styled-components'

const Dialog = styled.div`
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px;
  }
`

export const Styled = {
  Dialog,
}
