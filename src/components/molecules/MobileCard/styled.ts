import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  size: 'sm' | 'lg'
  imgUrl: string
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 128px;
  min-height: 160px;
  width: ${({ size }) => (size === 'lg' ? '100%' : '128px')};
  height: 160px;
  background-color: #f1eeee;
  border-radius: ${theme.radiuses.md}px;
  background-image: url(imgUrl);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
