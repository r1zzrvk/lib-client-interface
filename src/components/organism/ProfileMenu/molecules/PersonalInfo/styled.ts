import styled from 'styled-components'

import { theme } from '@constants'

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${theme.colors.beige};
  width: 24px;
  height: 24px;
`

const Dialog = styled.div`
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px;
  }
`

export const Styled = {
  IconWrapper,
  Dialog,
}
