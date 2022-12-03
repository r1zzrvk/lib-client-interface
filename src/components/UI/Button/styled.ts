import styled from 'styled-components'
import { theme, SIZES } from '@constants'

type TButtonProps = {
  size: 'sm' | 'md' | 'lg'
  isGhost?: boolean
}

const Button = styled.button<TButtonProps>`
  border-radius: 40px;
  border: none;
  cursor: pointer;
  width: ${({ size }) => SIZES[size]}px;
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-family: '${theme.fonts.family}', sans-serif;
  color: ${({ isGhost }) => (isGhost ? theme.colors.main : theme.colors.grey)};
  background-color: ${({ isGhost }) => (isGhost ? 'inherit' : theme.colors.secondary)};
  padding: ${theme.space.sm}px 0px ${theme.space.sm}px 0px;
  text-decoration: ${({ isGhost }) => (isGhost ? 'underline' : 'none')};

  &:hover {
    transition: all 1s ease;
    color: ${({ isGhost }) => (isGhost ? theme.colors.grey : theme.colors.main)};
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
`

export const Styled = {
  Button,
}
