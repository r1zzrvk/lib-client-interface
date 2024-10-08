import styled from 'styled-components'

import { theme } from '@constants'

const ItemListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: ${theme.space.sm}px;
  grid-row-gap: ${theme.space.md}px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0px 0px ${theme.space.sm}px 0px;
`

export const Styled = {
  ItemListWrapper,
}
