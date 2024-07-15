import styled from 'styled-components'

import { theme } from '@constants'

type TIconWrapperProps = {
  backgroundColor: string
  padding: number
  size: number
}

const IconWrapper = styled.div<TIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: ${({ padding }) => padding}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-shrink: 0;
  transition: all 0.3s ease-in;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

export const Styled = {
  IconWrapper,
}
