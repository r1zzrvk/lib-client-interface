import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  padding: ${theme.space.md}px 0px 0px 0px;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xl3}px ${theme.space.lg}px ${theme.space.xl3}px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xl4}px 120px ${theme.space.xl4}px 120px;
  }
`

export const Styled = {
  Wrapper,
}
