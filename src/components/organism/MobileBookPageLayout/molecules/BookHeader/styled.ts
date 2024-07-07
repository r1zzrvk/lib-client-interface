import styled from 'styled-components'

import { theme } from '@constants'

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${theme.colors.white};
  width: 24px;
  height: 24px;
`

export const Styled = {
  IconWrapper,
}
