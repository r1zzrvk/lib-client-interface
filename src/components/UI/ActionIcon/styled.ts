import styled from 'styled-components'

import { theme } from '@constants'

type TIconWrapperProps = {
  backgroundColor: string
  padding: number
  size: number
  animate: boolean
}

const IconWrapper = styled.button<TIconWrapperProps>`
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  animation: ${({ animate }) => (animate ? 'iconClick 0.5s ease' : 'none')};

  @keyframes iconClick {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  &:active {
    animation: none;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    &:hover {
      transition: all 0.3s ease-in;
      background-color: ${theme.colors.secondary};
    }
  }
`

export const Styled = {
  IconWrapper,
}
