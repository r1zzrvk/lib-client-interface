import styled from 'styled-components'

import { theme } from '@constants'

type TListProps = {
  position: 'left' | 'right'
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
  right: ${({ position }) => position === 'right' && '0px'};
  left: ${({ position }) => position === 'left' && '0px'};
  width: 250px;
  border-radius: ${theme.radiuses.xs}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  z-index: 100;
`

export const Styled = {
  PopoverWrapper,
  List,
}
