import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  gap: ${theme.space.lg}px;
  margin-left: ${theme.space.xl}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin-right: 120px;
    margin-left: 100px;
  }
`

export const Styled = {
  Wrapper,
}
