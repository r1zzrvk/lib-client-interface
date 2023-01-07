import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isOpen: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 100%;
  top: 0px;
  left: 0px;
  flex-direction: column;
  background-color: white;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    top: 30%;
    left: 30%;
    width: 500px;
    height: 500px;
    border-radius: 24px;
  }
`
const Icon = styled.div`
  cursor: pointer;
  align-self: flex-end;
  transform: rotate(45deg);
  padding-right: ${theme.space.sm}px;
  padding-top: ${theme.space.md}px;
`

export const Styled = {
  Wrapper,
  Icon,
}
