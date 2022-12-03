import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: block;
    padding: 70px 50px 70px 50px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    padding: 120px 120px 120px 120px;
  }
`

export const Styled = {
  Wrapper,
}
