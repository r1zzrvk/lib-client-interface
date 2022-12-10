import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isRow: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  gap: ${theme.space.xs}px;
`

export const Styled = {
  Wrapper,
}
