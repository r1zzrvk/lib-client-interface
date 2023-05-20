import { theme } from '@constants'
import styled from 'styled-components'

type TItemListWrapper = {
  columnGap?: number
  rowGap?: number
}

export const ItemListWrapper = styled.div<TItemListWrapper>`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: ${({ columnGap }) => columnGap || theme.space.sm}px;
  grid-row-gap: ${({ rowGap }) => rowGap || theme.space.md}px;
  grid-template-columns: repeat(1, 1fr);
  padding: ${theme.space.sm}px 0px ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding-top: ${theme.space.xl}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-top: ${theme.space.xl}px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
