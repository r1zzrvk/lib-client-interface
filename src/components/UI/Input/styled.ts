import styled from 'styled-components'
import { theme } from '@constants'

type TWrapperProps = {
  color: string
  fluid: boolean
  isIcon?: boolean
}

type TIconProps = {
  isActive: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  background-color: ${({ color }) => color};
  color: ${theme.colors.grey};
  width: ${({ fluid }) => (fluid ? '100%' : '380px')};
  height: 52px;
  border-radius: ${theme.radiuses.sm}px;
`

const Input = styled.input<TWrapperProps>`
  background-color: ${({ color }) => color};
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-family: '${theme.fonts.family}', sans-serif;
  border-radius: ${theme.radiuses.sm}px;
  width: ${({ fluid }) => (fluid ? '100%' : '300px')};
  border: none;
  outline: none;
  padding: ${({ isIcon }) => (isIcon ? '0px' : `0px 0px 0px ${theme.space.sm}px`)};
  text-align: left;

  &::placeholder {
    opacity: 1;
    font-size: ${theme.fonts.size.regular.md}px;
    line-height: ${theme.fonts.height.regular.md}px;
    font-weight: ${theme.fonts.weight.medium};
  }
`

const CustomIcon = styled.div<TIconProps>`
  position: relative;
  transition: 0.3s all;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'none')};
`

const Dot = styled.div`
  position: absolute;
  background-color: ${theme.colors.red};
  width: 8px;
  height: 8px;
  top: 12px;
  left: 32px;
  border-radius: ${theme.radiuses.round}px;
`

const ErrorText = styled.div`
  padding: 0px ${theme.space.sm}px;
`

export const Styled = {
  Input,
  Wrapper,
  CustomIcon,
  Dot,
  ErrorText,
}
