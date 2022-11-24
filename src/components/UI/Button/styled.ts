import styled from 'styled-components'
import { theme, SIZES } from '@constants'

type TButtonProps = {
  size: string
}

const Button = styled.button<TButtonProps>`
  border-radius: 40px;
  border: none;
  cursor: pointer;
  width: ${({ size }) => SIZES[size]}px;
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-family: '${theme.fonts.family}', sans-serif;
  color: ${theme.colors.grey};
  background-color: ${theme.colors.secondary};
  padding: ${theme.space.sm}px 0px ${theme.space.sm}px 0px;

  &:hover {
    transition: all 1s ease;
    text-decoration: underline;
  }

  &:focus {
    animation: jello-horizontal 0.9s ease;

    @keyframes jello-horizontal {
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
