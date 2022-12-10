import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
`
const ListWrapper = styled.div`
  display: flex;
  gap: ${theme.space.md}px;
`
export const Styled = {
  Wrapper,
  ListWrapper,
}
