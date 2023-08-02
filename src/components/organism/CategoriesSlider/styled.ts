import { theme } from '@constants'
import styled from 'styled-components'

const OutOfContainerWrap = styled.div`
  margin: 0px -${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: ${theme.space.xs}px;
  overflow-x: scroll;
  padding: ${theme.space.md}px ${theme.space.sm}px ${theme.space.lg}px ${theme.space.sm}px;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Styled = {
  Wrapper,
  OutOfContainerWrap,
}
