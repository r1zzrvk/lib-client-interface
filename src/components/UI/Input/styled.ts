import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  fluid: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  width: ${({ fluid }) => (fluid ? '100%' : '380px')};
  height: 48px;
  border-radius: ${theme.radiuses.sm}px;
`

const Input = styled.input<TWrapperProps>`
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-weight: ${theme.fonts.weight.medium};
  border-radius: ${theme.radiuses.sm}px;
  width: ${({ fluid }) => (fluid ? '100%' : '300px')};
  border: none;
  outline: none;

  &::placeholder {
    opacity: 1;
    font-size: ${theme.fonts.size.regular.sm}px;
    line-height: ${theme.fonts.height.regular.sm}px;
    font-weight: ${theme.fonts.weight.medium};
  }
`

export const Styled = {
  Input,
  Wrapper,
}
