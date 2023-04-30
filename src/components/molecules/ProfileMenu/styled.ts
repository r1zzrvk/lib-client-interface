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
  overflow-x: auto;
  gap: ${theme.space.sm}px;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${theme.space.md}px;
    margin-top: ${({ isColumn }) => (isColumn ? theme.space.sm : theme.space.lg)}px;
  }
`
const CustomText = styled.div<TCustomTextProps>`
  margin-left: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin-left: 0px;
    margin-top: ${({ isColumn }) => (isColumn ? theme.space.lg : theme.space.xl3)}px;
  }
`
export const Styled = {
  Wrapper,
  ListWrapper,
  CustomText,
}
