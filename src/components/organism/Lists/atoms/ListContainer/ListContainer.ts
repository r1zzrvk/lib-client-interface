import styled from 'styled-components'
import { theme } from '@constants'

export const ListContainer = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
    max-width: 700px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0px 120px;
  }
`
