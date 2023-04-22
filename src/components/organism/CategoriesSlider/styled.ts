import { theme } from '@constants'
import styled from 'styled-components'

const OutOfContainerWrap = styled.div`
  /* position: absolute; */
  /* TODO контент врезается в контейнер */
  margin-top: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: ${theme.space.xs}px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Styled = {
  Wrapper,
  OutOfContainerWrap,
}
