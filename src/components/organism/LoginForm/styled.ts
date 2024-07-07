import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const Styled = {
  Wrapper,
}
