import { theme } from '@constants'
import styled from 'styled-components'

type TCustomTextProps = {
  isColumn: boolean
}

type TListWrapperProps = {
  isColumn: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ListWrapper = styled.div<TListWrapperProps>`
  display: flex;
  margin-top: ${({ isColumn }) => (isColumn ? theme.space.sm : theme.space.lg)}px;
  gap: ${theme.space.md}px;
`
const CustomText = styled.div<TCustomTextProps>`
  margin-top: ${({ isColumn }) => (isColumn ? theme.space.lg : theme.space.xl3)}px;
`
export const Styled = {
  Wrapper,
  ListWrapper,
  CustomText,
}
