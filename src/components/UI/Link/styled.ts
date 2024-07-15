import styled from 'styled-components'

import { theme } from '@constants'

type TLinkProps = {
  fontWeight: number
  color: string
  hoverColor?: string
}

const Link = styled.a<TLinkProps>`
  font-size: ${theme.fonts.size.regular.md}px;
  font-weight: ${({ fontWeight }) => fontWeight}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-family: '${theme.fonts.family}', sans-serif;
  color: ${({ color }) => color};
  text-decoration: none;
  transition: 0.4s;
  white-space: pre-line;
  flex-shrink: 0;

  &:hover {
    text-decoration: ${({ hoverColor }) => `underline ${hoverColor || theme.colors.secondary}`};
    color: ${({ hoverColor }) => hoverColor || theme.colors.secondary};
  }
`

const Button = styled.button<TLinkProps>`
  font-size: ${theme.fonts.size.regular.md}px;
  font-weight: ${({ fontWeight }) => fontWeight}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-family: '${theme.fonts.family}', sans-serif;
  color: ${({ color }) => color};
  text-decoration: none;
  transition: 0.4s;
  white-space: pre-line;
  border: none;
  background-color: inherit;
  padding: 0px;
  margin: 0px;
  flex-shrink: 0;

  &:hover {
    text-decoration: ${({ hoverColor }) => `underline ${hoverColor || theme.colors.secondary}`};
    color: ${({ hoverColor }) => hoverColor || theme.colors.secondary};
  }
`

export const Styled = {
  Link,
  Button,
}
