import styled from 'styled-components'
import { theme } from '@constants'

export const ListContainer = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0px 120px;
    max-width: 800px;
  }
`
