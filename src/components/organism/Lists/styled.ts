import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.sm}px;
  padding: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.lg}px 0px;
  }
`

const PaddingContainer = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0px 120px;
    max-width: 700px;
  }
`

export const Styled = {
  Wrapper,
  PaddingContainer,
}
