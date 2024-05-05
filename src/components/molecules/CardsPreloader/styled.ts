import { theme } from '@constants'
import styled from 'styled-components'

const ItemListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: ${theme.space.sm}px;
  grid-row-gap: ${theme.space.md}px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0px 0px ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Styled = {
  ItemListWrapper,
}
