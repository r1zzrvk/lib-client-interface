import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;
  padding: ${theme.space.md}px ${theme.space.sm}px 0px ${theme.space.sm}px;
  border-radius: ${theme.radiuses.md}px ${theme.radiuses.md}px 0px 0px;
`

export const Styled = {
  Wrapper,
}
