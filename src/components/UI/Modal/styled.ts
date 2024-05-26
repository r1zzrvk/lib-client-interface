import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isOpen: boolean
}

type TModalProps = {
  size: 'lg' | 'sm'
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
  z-index: 1000;
`
const Modal = styled.div<TModalProps>`
  display: flex;
  width: ${({ size }) => (size === 'lg' ? '100%' : '90%')};
  height: ${({ size }) => (size === 'lg' ? '100%' : 'auto')};
  border-radius: ${({ size }) => (size === 'lg' ? '0px' : `${theme.radiuses.md}px`)};
  background-color: white;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: ${({ size }) => (size === 'lg' ? '700px' : '500px')};
    height: auto;
    border-radius: ${theme.radiuses.md}px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: ${({ size }) => (size === 'lg' ? '700px' : '500px')};
    height: auto;
    border-radius: ${theme.radiuses.md}px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space.sm}px ${theme.space.sm}px ${theme.space.xs2}px ${theme.space.sm}px;
`

const Icon = styled.div`
  cursor: pointer;
  align-self: flex-end;
`

export const Styled = {
  Wrapper,
  Icon,
  Header,
  Modal,
}
