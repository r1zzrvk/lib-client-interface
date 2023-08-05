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
  padding: 0px 0px ${theme.space.sm}px 0px;
`
