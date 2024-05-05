import styled from 'styled-components'

type TWrapperProps = {
  upDownPadding: number
  sidePadding: number
  isButton: boolean
  withBorder: boolean
  borderColor: string
  size: number
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isButton }) => isButton && 'pointer'};
  padding: ${({ upDownPadding, sidePadding }) =>
    upDownPadding && sidePadding && `${upDownPadding}px ${sidePadding}px ${upDownPadding}px ${sidePadding}px `};
  border-left: ${({ withBorder, borderColor }) => withBorder && `2px solid ${borderColor}`};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const Styled = {
  Wrapper,
}
