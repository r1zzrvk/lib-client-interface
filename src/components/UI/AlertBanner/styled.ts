import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.beige};
  border-radius: ${theme.radiuses.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 500px;
  }
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${theme.space.xs2}px 20px ${theme.space.xs2}px 20px;
  border-bottom: 1px solid ${theme.colors.main};
`

const Body = styled.div`
  padding: ${theme.space.xs2}px 20px ${theme.space.xs2}px 20px;
  opacity: 0.7;
`
export const Styled = {
  Wrapper,
  Header,
  Body,
}
