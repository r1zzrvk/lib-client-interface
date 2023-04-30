import styled from 'styled-components'

type TWrapperProps = {
  upDownPadding: number
  sidePadding: number
  isButton: boolean
  withBorder: boolean
  borderColor: string
}

const Wrapper = styled.div<TWrapperProps>`
  cursor: ${({ isButton }) => isButton && 'pointer'};
  padding: ${({ upDownPadding, sidePadding }) =>
    upDownPadding && sidePadding && `${upDownPadding}px ${sidePadding}px ${upDownPadding}px ${sidePadding}px `};
  border-left: ${({ withBorder, borderColor }) => withBorder && `2px solid ${borderColor}`};
`

export const Styled = {
  Wrapper,
}
