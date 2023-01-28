import { theme } from '@constants'
import styled from 'styled-components'

export const ItemListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: ${theme.space.md}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xl}px ${theme.space.lg}px 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    padding: ${theme.space.xl}px ${theme.space.xl}px 0px ${theme.space.xl}px;
  }
`
