import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isOpen: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: ${({ isOpen }) => (isOpen ? 'center' : 'none')};
  align-items: ${({ isOpen }) => (isOpen ? 'center' : 'none')};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
const Modal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 700px;
    height: 700px;
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
  Modal,
}
