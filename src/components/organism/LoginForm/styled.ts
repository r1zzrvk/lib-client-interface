import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.sm}px) {
    border-radius: ${theme.radiuses.lg}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    padding: ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px;
  }
`

export const Styled = {
  Wrapper,
}
