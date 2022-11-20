import { theme } from '@constants'
import styled from 'styled-components'

const TabletMenu = styled.div`
  padding: ${theme.space.lg}px;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`

export const Styled = {
  TabletMenu,
}
