import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${theme.radiuses.sm}px ${theme.radiuses.sm}px 0px 0px;
  background-color: ${theme.colors.white};
  height: 80px;
  box-shadow: 0px 2px 16px 8px rgba(0, 0, 0, 0.08);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
