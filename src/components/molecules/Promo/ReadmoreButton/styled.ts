import { theme } from '@constants'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-family: '${theme.fonts.family}', sans-serif;
  transition: 0.4s;
  align-items: center;
  padding: 0px;
  margin: 0px;

  &:hover {
    color: ${theme.colors.secondary};
  }

  svg {
    transition: 0.4s;
    margin-left: 20px;
  }

  &:hover svg {
    transform: translatex(+10px);
  }
`

export const Styled = {
  Button,
}
