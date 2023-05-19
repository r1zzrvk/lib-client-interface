import { theme } from '@constants'
import styled from 'styled-components'

export const ItemListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: ${theme.space.sm}px;
  grid-row-gap: ${theme.space.md}px;
  grid-template-columns: repeat(1, 1fr);
  padding: ${theme.space.sm}px 0px ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding-top: ${theme.space.xl}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-top: ${theme.space.xl}px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    padding-top: ${theme.space.xl}px;
    grid-template-columns: repeat(2, 1fr);
  }
`
