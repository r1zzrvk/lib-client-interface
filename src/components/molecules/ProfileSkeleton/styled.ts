import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 700px;
    padding: ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px;
  }
`

export const Styled = {
  Wrapper,
}
