import styled from 'styled-components'

import { theme, SIZES } from '@constants'

type TButtonProps = {
  size: 'sm' | 'md' | 'lg'
  animate: boolean
  isGhost?: boolean
  isFluid?: boolean
}

const Button = styled.button<TButtonProps>`
  border-radius: ${theme.radiuses.sm}px;
  border: none;
  cursor: pointer;
  width: ${({ size, isFluid }) => (!isFluid && size ? `${SIZES[size]}px` : '100%')};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-family: '${theme.fonts.family}', sans-serif;
  color: ${({ isGhost }) => (isGhost ? theme.colors.main : theme.colors.grey)};
  background-color: ${({ isGhost }) => (isGhost ? 'inherit' : theme.colors.secondary)};
  padding: ${theme.space.sm}px 0px ${theme.space.sm}px 0px;
  text-decoration: ${({ isGhost }) => (isGhost ? 'underline' : 'none')};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  animation: ${({ animate }) => (animate ? 'click 0.5s ease' : 'none')};

  @keyframes click {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    transition: all 1s ease;
    background-color: ${({ isGhost }) => (isGhost ? 'inherit' : theme.colors.tertiary)};
    color: ${theme.colors.grey};
    text-decoration: ${({ isGhost }) => (isGhost ? 'none' : 'underline')};
  }

  &:active {
    animation: none;
  }

  &:focus {
    outline: none;
  }
`

export const Styled = {
  Button,
}
