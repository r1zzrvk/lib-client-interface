import { theme } from '@constants'
import styled from 'styled-components'

type TDividerProps = {
  isVertical?: boolean
  sideMargin?: number
}

export const Divider = styled.hr<TDividerProps>`
  border-radius: 1px;
  border: 1px solid ${theme.colors.main};
  opacity: 0.2;
  margin: ${({ sideMargin }) => sideMargin && `0px ${sideMargin}px 0px ${sideMargin}px`};
  margin-right: 20px;
  transform: ${({ isVertical }) => isVertical && 'rotate(180deg)'};
`
