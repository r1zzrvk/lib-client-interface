import styled from 'styled-components'

import { theme, SIZES } from '@constants'

type TButtonProps = {
  size: 'sm' | 'md' | 'lg'
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

  &:hover {
    transition: all 1s ease;
    color: ${theme.colors.grey};
    text-decoration: ${({ isGhost }) => (isGhost ? 'none' : 'underline')};
  }

  &:focus {
    animation: click 0.9s ease;

    @keyframes click {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
      }
    }
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
