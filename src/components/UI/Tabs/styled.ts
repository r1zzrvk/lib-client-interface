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
  overflow-x: auto;
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Styled = {
  Wrapper,
}
