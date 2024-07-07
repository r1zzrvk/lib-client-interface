import styled from 'styled-components'

import { theme } from '@constants'

export const ListContainer = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px ${theme.space.lg}px;
    max-width: 700px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xl}px 120px;
  }
`
