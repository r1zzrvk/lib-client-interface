import styled from 'styled-components'

import { theme } from '@constants'

type TWrapperProps = {
  isFluid?: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  width: 100%;
  background-color: ${theme.colors.beige};
  border-radius: ${theme.radiuses.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: ${({ isFluid }) => (isFluid ? '100%' : '500px')};
  }
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space.xs}px ${theme.space.sm}px ${theme.space.xs3}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px ${theme.space.md}px ${theme.space.xs2}px ${theme.space.md}px;
  }
`

const Body = styled.div`
  padding: ${theme.space.xs3}px ${theme.space.sm}px ${theme.space.xs}px ${theme.space.sm}px;
  opacity: 0.7;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xs2}px ${theme.space.md}px ${theme.space.sm}px ${theme.space.md}px;
  }
`
export const Styled = {
  Wrapper,
  Header,
  Body,
}
