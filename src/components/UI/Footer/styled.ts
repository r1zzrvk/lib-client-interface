import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.footer`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: block;
    text-align: left;
    background-color: ${theme.colors.main};
  }
`

export const Styled = {
  Wrapper,
}
