import { theme } from '@constants'
import styled from 'styled-components'

const OutOfContainerWrap = styled.div`
  margin-top: ${theme.space.sm}px;
  padding: 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: ${theme.space.xs}px;
  overflow-x: scroll;
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Styled = {
  Wrapper,
  OutOfContainerWrap,
}
