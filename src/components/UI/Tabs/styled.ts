import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isRow: boolean
  marginTop: number | undefined
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  margin-top: ${({ marginTop }) => marginTop}px;
  gap: ${theme.space.xs}px;
`

export const Styled = {
  Wrapper,
}
