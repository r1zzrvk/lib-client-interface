import styled from 'styled-components'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'

type TMenuItemProps = {
  position: 'left' | 'right'
}

const Wrapper = styled.div`
  padding: 0px ${theme.space.xs2}px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`

const MenuItem = styled(Flexbox)<TMenuItemProps>`
  cursor: pointer;
  border-radius: 4px;
  padding-left: ${({ position }) => (position === 'right' ? theme.space.xs3 : 0)}px;
  min-height: 32px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    &:hover {
      background-color: ${theme.colors.secondary};
    }
  }
`

export const Styled = {
  Wrapper,
  IconWrapper,
  MenuItem,
}
