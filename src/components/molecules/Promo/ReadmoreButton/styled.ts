import styled from 'styled-components'

import { theme } from '@constants'

type TButtonProps = {
  textColor: string
}

const Button = styled.button<TButtonProps>`
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-family: '${theme.fonts.family}', sans-serif;
  transition: 0.4s;
  align-items: center;
  padding: 0px;
  margin: 0px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    color: ${({ textColor }) => (textColor === theme.colors.white ? theme.colors.secondary : theme.colors.grey_light)};
  }

  svg {
    transition: 0.2s;
    margin-left: 20px;
  }

  &:hover svg {
    fill: ${theme.colors.secondary};
    transform: translatex(+10px);
  }
`

export const Styled = {
  Button,
}
