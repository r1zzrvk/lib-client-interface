import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.section`
  margin-left: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    gap: ${theme.space.lg}px;
    margin-left: ${theme.space.xl}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin-left: 100px;
  }
`

export const Styled = {
  Wrapper,
}
