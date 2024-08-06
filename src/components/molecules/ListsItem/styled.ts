import styled from 'styled-components'

import { theme } from '@constants'

const ListItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: ${theme.space.lg}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: ${theme.radiuses.md}px;
  padding: ${theme.space.lg}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.lg}px ${theme.space.lg}px;
  }
`

const Pin = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 40px;
    height: 40px;
  }
`

export const Styled = {
  ListItem,
  Pin,
}
