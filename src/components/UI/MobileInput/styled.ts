import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  width: 100%;
  height: 48px;
  border-radius: 18px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

const Icon = styled.div`
  padding: ${theme.space.xs}px ${theme.space.sm}px ${theme.space.xs}px ${theme.space.sm}px;
`

const Input = styled.input`
  background-color: ${theme.colors.beige};
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  font-weight: ${theme.fonts.weight.medium};
  border-radius: 18px;
  width: 100%;
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
