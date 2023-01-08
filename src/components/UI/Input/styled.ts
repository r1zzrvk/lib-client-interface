import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  fluid: boolean
}

type TIconProps = {
  isButton?: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  width: ${({ fluid }) => (fluid ? '100%' : '380px')};
  height: 48px;
  border-radius: 18px;
`

const Icon = styled.div<TIconProps>`
  cursor: ${({ isButton }) => isButton && 'pointer'};
  border-left: ${({ isButton }) => isButton && `2px solid ${theme.colors.main}`};
  padding: ${theme.space.xs}px ${theme.space.sm}px ${theme.space.xs}px ${theme.space.sm}px;
`

const Input = styled.input`
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-weight: ${theme.fonts.weight.medium};
  border-radius: 18px;
  width: 300px;
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
  Icon,
}
