import styled from 'styled-components'

import { theme } from '@constants'

export const PromoBackground = styled.div`
  background-color: ${theme.colors.main};
  padding: ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;
  margin-left: ${theme.space.sm}px;
  border-radius: ${theme.radiuses.sm}px 0px 0px ${theme.radiuses.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 700px;
    border-radius: ${theme.radiuses.lg}px 0px 0px ${theme.radiuses.lg}px;
    padding: ${theme.space.xl}px ${theme.space.lg}px ${theme.space.xl}px ${theme.space.lg}px;
    margin-left: ${theme.space.xl}px;
  }
`
