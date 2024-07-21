import styled from 'styled-components'

import { theme } from '@constants'

type TArrowButtonProps = {
  isInvisible: boolean
  isLeft?: boolean
}

type TPageButtonProps = {
  isActive: boolean
}

const PageButton = styled.button<TPageButtonProps>`
  border: none;
  cursor: pointer;
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-weight: ${theme.fonts.weight.medium};
  font-family: '${theme.fonts.family}', sans-serif;
  background-color: ${({ isActive }) => (isActive ? theme.colors.secondary : theme.colors.beige)};
  color: ${theme.colors.grey};
  padding: ${theme.space.xs2}px ${theme.space.xs}px;
  border-radius: 12px;
  min-width: 38px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    text-decoration: underline;
  }
`
const ArrowButton = styled.button<TArrowButtonProps>`
  border: none;
  background-color: inherit;
  opacity: ${({ isInvisible }) => (isInvisible ? 0 : 1)};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const Styled = {
  PageButton,
  ArrowButton,
}
