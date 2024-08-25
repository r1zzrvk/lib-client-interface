import styled from 'styled-components'

import { theme } from '@constants'

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
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Styled = {
  Wrapper,
  OutOfContainerWrap,
}
