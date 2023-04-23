import styled from 'styled-components'

type TPaddingContainerProps = {
  padding: number
}

export const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: ${({ padding }) => `0px ${padding}px 0px ${padding}px`};
`
