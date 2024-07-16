import styled from 'styled-components'

import { theme } from '@constants'

export const Background = styled.div`
  background-color: ${theme.colors.beige};
  border-radius: ${theme.radiuses.md}px;
  padding: ${theme.space.md}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 100%;
  }
`
