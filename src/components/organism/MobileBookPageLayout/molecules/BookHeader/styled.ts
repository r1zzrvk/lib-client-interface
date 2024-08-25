import styled from 'styled-components'

import { theme } from '@constants'

const ButtonWrapper = styled.div`
  padding: 0px ${theme.space.xs2}px;
`

const EmptyListsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.space.md}px ${theme.space.xs2}px;
`

export const Styled = {
  ButtonWrapper,
  EmptyListsWrapper,
}
