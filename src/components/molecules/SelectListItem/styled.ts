import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s ease-in-out;
  flex-shrink: 0;
  min-height: 40px;
  padding: 0px ${theme.space.xs3}px;

  :hover {
    box-shadow: 0px -2px 0px 0px ${theme.colors.beige} inset;
  }
`

export const Styled = {
  Wrapper,
}
