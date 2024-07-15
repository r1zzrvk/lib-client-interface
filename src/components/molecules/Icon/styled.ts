import styled from 'styled-components'

type TWrapperProps = {
  size: number
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-shrink: 0;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const Styled = {
  Wrapper,
}
