import { theme } from '@constants'
import styled from 'styled-components'

type TIconProps = {
  isActive: boolean
}

const ListItem = styled.div`
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

const Icon = styled.div<TIconProps>`
  transition: 0.2s ease-in;
  transform: ${({ isActive }) => isActive && 'rotate(180deg)'};
`

const Pin = styled.div`
  transform: rotate(45deg);
`

export const Styled = {
  ListItem,
  Icon,
  Pin,
}
