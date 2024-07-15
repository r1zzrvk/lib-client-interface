import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.section`
  box-sizing: border-box;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    gap: ${theme.space.lg}px;
  }
`

export const Styled = {
  Wrapper,
}
