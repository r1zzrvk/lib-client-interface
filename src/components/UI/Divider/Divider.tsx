import styled from 'styled-components'

import { theme } from '@constants'

type TDividerProps = {
  isVertical?: boolean
  sideMargin?: number
}

export const Divider = styled.hr<TDividerProps>`
  border-radius: 1px;
  background-color: ${theme.colors.main};
  border: none;
  height: 2px;
  opacity: 0.2;
  margin: ${({ sideMargin }) => sideMargin && `0px ${sideMargin}px 0px ${sideMargin}px`};
  transform: ${({ isVertical }) => isVertical && 'rotate(180deg)'};
`
