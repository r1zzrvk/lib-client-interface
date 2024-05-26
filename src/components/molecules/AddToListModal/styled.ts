import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;
`

const List = styled.div`
  max-height: 220px;
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Styled = {
  Wrapper,
  List,
}
