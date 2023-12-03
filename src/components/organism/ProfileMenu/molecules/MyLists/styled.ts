import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled(Flexbox)`
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 700px;
  }
`

export const Styled = {
  Wrapper,
}
