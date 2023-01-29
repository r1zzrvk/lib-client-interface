import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: ${theme.radiuses.md}px ${theme.radiuses.md}px 0px 0px;
  background-color: ${theme.colors.white};
  padding: ${theme.space.md}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
