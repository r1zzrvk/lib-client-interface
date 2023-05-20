import { theme } from '@constants'
import styled from 'styled-components'

const Illustration = styled.img`
  width: 320px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 600px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 800px;
  }
`

export const Styled = {
  Illustration,
}
