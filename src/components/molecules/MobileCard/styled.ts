import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  size: 'sm' | 'lg'
  imgUrl: string
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  justify-content: ${({ size }) => (size === 'lg' ? 'flex-end' : 'center')};
  align-items: ${({ size }) => (size === 'lg' ? 'center' : 'flex-end')};
  width: ${({ size }) => (size === 'lg' ? '100%' : '128px')};
  height: ${({ size }) => (size === 'lg' ? '128' : '160')}px;
  background-color: #f1eeee;
  border-radius: ${theme.radiuses.md}px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-repeat: no-repeat;
  flex-shrink: 0;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
