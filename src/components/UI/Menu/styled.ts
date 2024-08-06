import styled from 'styled-components'

import { theme } from '@constants'

type TListProps = {
  positionX: 'left' | 'right'
  positionY: 'top' | 'bottom'
  buttonHeight?: number
}

const PopoverWrapper = styled.menu`
  position: relative;
  padding: 0px;
  margin: 0px;
`

const List = styled.div<TListProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${theme.space.xs3}px;
  margin-top: ${theme.space.xs3}px;
  padding: ${theme.space.xs2}px 0px;
  background-color: ${theme.colors.white};
  right: ${({ positionX }) => positionX === 'right' && '0px'};
  left: ${({ positionX }) => positionX === 'left' && '0px'};
  width: 250px;
  border-radius: ${theme.radiuses.xs}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  z-index: 100;
  bottom: ${({ positionY, buttonHeight }) => (positionY === 'bottom' ? 'none' : `${Number(buttonHeight) + 4}px`)};
`

export const Styled = {
  PopoverWrapper,
  List,
}
