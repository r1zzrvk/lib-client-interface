import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  active: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s ease-in-out;
  box-shadow: ${({ active }) => active && `0px -2px 0px 0px ${theme.colors.main} inset`};
  flex-shrink: 0;
  padding: ${theme.space.xs3}px ${theme.space.xs2}px ${theme.space.xs3}px ${theme.space.xs2}px;
`

export const Styled = {
  Wrapper,
}
