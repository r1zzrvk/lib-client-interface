import styled from 'styled-components'

import { theme } from '@constants'

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 120px;
    padding: ${theme.space.xl2}px 120px ${theme.space.xl}px;
  }
`

export const Styled = {
  DesktopMenu,
}
